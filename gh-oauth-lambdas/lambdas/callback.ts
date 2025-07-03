import { AuthorizationCode } from "simple-oauth2";
import { APIGatewayEvent } from "aws-lambda";
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

const ssmClient = new SSMClient();

type MessageData = {
  token: unknown;
  provider: string;
};

export const handler = async (event: APIGatewayEvent) => {
  if (!process.env.GITHUB_CLIENT_ID) {
    throw new Error("No value for environment variable 'GITHUB_CLIENT_ID'");
  }
  if (!process.env.CALLBACK_URL) {
    throw new Error("No value for environment variable 'CALLBACK_URL'");
  }

  const GITHUB_CLIENT_SECRET = await ssmClient
    .send(
      new GetParameterCommand({
        Name: process.env.GITHUB_CLIENT_SECRET_PARAMETER_NAME,
        WithDecryption: true,
      }),
    )
    .then(({ Parameter }) => {
      if (!Parameter?.Value) {
        throw new Error("No value for GITHUB_CLIENT_SECRET");
      }
      return Parameter.Value;
    });

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
  };

  console.debug("OAuth Callback Event", event);

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  try {
    const { code, error } = event.queryStringParameters || {};

    // Handle GitHub error responses
    if (error) {
      console.error("OAuth Error", error);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: `OAuth error`,
          message: "Authentication failed",
        }),
      };
    }

    if (!code) {
      console.error("Error: No Authorization Code Received", error);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: "OAuth error",
          message: "Authentication failed",
        }),
      };
    }

    console.debug(
      "Configuring OAuth client with ID",
      process.env.GITHUB_CLIENT_ID,
    );

    // Configure OAuth2 client
    const client = new AuthorizationCode({
      client: {
        id: process.env.GITHUB_CLIENT_ID,
        secret: GITHUB_CLIENT_SECRET,
      },
      auth: {
        tokenHost: "https://github.com",
        tokenPath: "/login/oauth/access_token",
        authorizePath: "/login/oauth/authorize",
      },
    });

    console.debug("Getting token from code.");

    // Exchange code for token
    const accessToken = await client.getToken({
      code,
      redirect_uri: process.env.CALLBACK_URL,
    });
    const token = accessToken.token.access_token;

    console.debug("Successful Callback with token.");

    // Return success response with token data
    return {
      statusCode: 200,
      headers: {
        ...headers,
        "Content-Type": "text/html",
      },
      body: renderResponse("success", {
        token,
        provider: "github",
      }),
    };
  } catch (error) {
    console.error("Callback error:", error);
    return {
      statusCode: 500,
      headers,
      body: renderResponse("error"),
    };
  }
};

/** Render a html response with a script to finish a client-side github authentication */
function renderResponse(
  status: "success" | "error",
  content?: MessageData,
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Authorizing ...</title>
</head>
<body>
  <p id="message"></p>
  <script>
    // Output a message to the user
    function sendMessage(message) {
      document.getElementById("message").innerText = message;
      document.title = message
    }
    // Handle a window message by sending the auth to the "opener"
    function receiveMessage(message) {
      console.debug("receiveMessage", message);
      window.opener.postMessage(
        'authorization:github:${status}:${JSON.stringify(content)}',
        message.origin
      );
      window.removeEventListener("message", receiveMessage, false);
      sendMessage("Authorized, closing ...");
    }
    sendMessage("Authorizing ...");
    window.addEventListener("message", receiveMessage, false);
    console.debug("postMessage", "authorizing:github", "*")
    window.opener.postMessage("authorizing:github", "*");
  </script>
</body>
</html>`;
}
