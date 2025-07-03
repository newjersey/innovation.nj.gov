import { AuthorizationCode } from "simple-oauth2";
import https from "https";
import { APIGatewayEvent } from "aws-lambda";

type MessageData = {
  token: unknown;
  provider: string;
  user: UserInfo;
};

export const handler = async (event: APIGatewayEvent) => {
  if (!process.env.GITHUB_CLIENT_ID) {
    throw new Error("No value for environment variable 'GITHUB_CLIENT_ID'");
  }

  if (!process.env.GITHUB_CLIENT_SECRET) {
    throw new Error("No value for environment variable 'GITHUB_CLIENT_SECRET'");
  }
  const headers = {
    "Access-Control-Allow-Origin": "*", // Replace with your Jekyll site domain
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

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
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: `OAuth error: ${error}`,
          message: "Authentication failed",
        }),
      };
    }

    if (!code) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: "No authorization code received",
          message: "Authentication failed",
        }),
      };
    }

    // Configure OAuth2 client
    const client = new AuthorizationCode({
      client: {
        id: process.env.GITHUB_CLIENT_ID,
        secret: process.env.GITHUB_CLIENT_SECRET,
      },
      auth: {
        tokenHost: "https://github.com",
        tokenPath: "/login/oauth/access_token",
        authorizePath: "/login/oauth/authorize",
      },
    });

    // Exchange code for token
    const accessToken = await client.getToken({
      code,
      redirect_uri: process.env.CALLBACK_URL!,
      scope: "repo,user",
    });
    const token = accessToken.token.access_token;

    // Get user info from GitHub API
    const userInfo = await getUserInfo(token);

    // Return success response with token data
    return {
      statusCode: 200,
      headers: {
        ...headers,
        "Content-Type": "text/html",
      },
      body: createPostMessagePage({
        token: token,
        provider: "github",
        user: userInfo,
      }),
    };
  } catch (error) {
    console.error("Callback error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Authentication callback failed",
      }),
    };
  }
};

type UserInfo = {
  login: string;
  name: string;
  email: string;
  avatar_url: string;
};

/**
 * Get user information from GitHub API
 */
const getUserInfo = async (accessToken: unknown) => {
  return new Promise<UserInfo>((resolve, reject) => {
    const options = {
      hostname: "api.github.com",
      port: 443,
      path: "/user",
      method: "GET",
      headers: {
        Authorization: `token ${accessToken}`,
        "User-Agent": "DecapCMS-OAuth-Handler",
        Accept: "application/vnd.github.v3+json",
      },
    };

    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const result = JSON.parse(data);
          resolve({
            login: result.login,
            name: result.name,
            email: result.email,
            avatar_url: result.avatar_url,
          } as UserInfo);
        } catch (e) {
          reject(new Error("Failed to parse user info"));
        }
      });
    });

    req.on("error", (e) => {
      reject(e);
    });

    req.end();
  });
};
// Create a secure postMessage page for Decap CMS OAuth flow
const createPostMessagePage = (data: MessageData) => {
  return `<!DOCTYPE html>
<html>
<head>
    <title>Authorization Complete</title>
    <meta charset="utf-8">
    <meta http-equiv="Content-Security-Policy" content="script-src 'unsafe-inline'; object-src 'none';">
</head>
<body>
    <h2>Authorization Successful</h2>
    <p>You can close this window and return to your CMS.</p>
    <script>
        // Decap CMS OAuth communication protocol
        (function() {
            if (!window.opener) {
                document.body.innerHTML += "<p><strong>Error:</strong> This page should be opened in a popup window.</p>";
                return;
            }
            
            try {
                // Send success message to Decap CMS parent window
                window.opener.postMessage({
                    token: "${data.token}",
                    provider: "github"
                }, "*");
                
                // Auto-close after a short delay
                setTimeout(function() {
                    window.close();
                }, 1000);
                
            } catch (error) {
                console.error("Failed to communicate with parent window:", error);
                document.body.innerHTML += "<p><strong>Please close this window manually.</strong></p>";
            }
        })();
    </script>
</body>
</html>`;
};
