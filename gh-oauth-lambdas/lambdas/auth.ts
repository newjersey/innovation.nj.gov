import { AuthorizationCode } from "simple-oauth2";
import { APIGatewayEvent } from "aws-lambda";
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

const ssmClient = new SSMClient();

export const handler = async (event: APIGatewayEvent) => {
  if (!process.env.GITHUB_CLIENT_ID) {
    throw new Error("No value for environment variable 'GITHUB_CLIENT_ID'");
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
    "Access-Control-Allow-Origin": "*", // Replace with your Jekyll site domain
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  console.debug("OAuth Auth Event", event);

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  try {
    // Configure OAuth2 client
    const client = new AuthorizationCode({
      client: {
        id: process.env.GITHUB_CLIENT_ID!,
        secret: GITHUB_CLIENT_SECRET,
      },
      auth: {
        tokenHost: "https://github.com",
        tokenPath: "/login/oauth/access_token",
        authorizePath: "/login/oauth/authorize",
      },
    });

    // Generate authorization URL
    const authorizationUri = client.authorizeURL({
      redirect_uri: process.env.CALLBACK_URL,
      scope: "repo,user",
      state: event.queryStringParameters?.state || "default-state",
    });

    console.debug("Successfull Auth response");
    // Return a redirect response
    return {
      statusCode: 302,
      headers: {
        ...headers,
        Location: authorizationUri,
      },
      body: "",
    };
  } catch (error) {
    console.error("Auth error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Authentication failed" }),
    };
  }
};
