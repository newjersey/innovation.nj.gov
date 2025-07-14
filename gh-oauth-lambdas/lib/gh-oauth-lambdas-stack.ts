import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { LogGroup } from "aws-cdk-lib/aws-logs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import {
  CorsHttpMethod,
  HttpApi,
  HttpMethod,
} from "aws-cdk-lib/aws-apigatewayv2";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { StringParameter } from "aws-cdk-lib/aws-ssm";

export interface GHOAuthStackProps extends cdk.StackProps {
  githubClientId: string;
  githubClientSecretParameterName: string;
  allowedOrigins?: string[];
}

export class GhOauthLambdasStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: GHOAuthStackProps) {
    super(scope, id, props);
    const { githubClientSecretParameterName, githubClientId } = props;

    // Get GitHub client secret from Parameter Store
    const githubClientSecret =
      StringParameter.fromSecureStringParameterAttributes(
        this,
        `${this.stackName}-GithubClientSecret`,
        { parameterName: githubClientSecretParameterName },
      );

    const functionNameAuth = "innovation-nj-gov-cms-auth";
    const logGroupAuth = new LogGroup(this, `${functionNameAuth}-LogGroup`, {
      logGroupName: `/aws/lambda/${functionNameAuth}`,
      retention: RetentionDays.INFINITE,
    });
    const functionNameCallback = "innovation-nj-gov-cms-callback";
    const logGroupCallback = new LogGroup(
      this,
      `${functionNameCallback}-LogGroup`,
      {
        logGroupName: `/aws/lambda/${functionNameCallback}`,
        retention: RetentionDays.INFINITE,
      },
    );

    const authLambda = new NodejsFunction(this, functionNameAuth, {
      functionName: functionNameAuth,
      entry: "lambdas/auth.ts",
      runtime: Runtime.NODEJS_22_X,
      memorySize: 512,
      logGroup: logGroupAuth,
      environment: {
        GITHUB_CLIENT_ID: githubClientId,
        GITHUB_CLIENT_SECRET_PARAMETER_NAME: githubClientSecretParameterName,
        CALLBACK_URL: "", // defined by API Gateway
      },
    });
    const callbackLambda = new NodejsFunction(this, functionNameCallback, {
      functionName: functionNameCallback,
      entry: "lambdas/callback.ts",
      runtime: Runtime.NODEJS_22_X,
      memorySize: 512,
      logGroup: logGroupCallback,
      environment: {
        GITHUB_CLIENT_ID: githubClientId,
        GITHUB_CLIENT_SECRET_PARAMETER_NAME: githubClientSecretParameterName,
        CALLBACK_URL: "", // defined by API Gateway
      },
    });

    // Grant read permissions to the parameter
    githubClientSecret.grantRead(authLambda);
    githubClientSecret.grantRead(callbackLambda);

    const authIntegration = new HttpLambdaIntegration(
      "innovation-nj-gov-cms-auth-integration",
      authLambda,
    );

    const callbackIntegration = new HttpLambdaIntegration(
      "innovation-nj-gov-cms-callback-integration",
      callbackLambda,
    );

    const gateway = new HttpApi(this, "innovation-nj-gov-cms-gateway", {
      createDefaultStage: true,
      corsPreflight: {
        allowHeaders: [
          "Content-Type",
          "X-Amz-Date",
          "Authorization",
          "X-Api-Key",
          "X-Amz-Security-Token",
          "X-Amz-User-Agent",
          "X-Amzn-Trace-Id",
        ],
        allowMethods: [CorsHttpMethod.OPTIONS, CorsHttpMethod.GET],
        allowOrigins: ["*"],
      },
    });

    gateway.addRoutes({
      path: "/auth",
      methods: [HttpMethod.GET, HttpMethod.OPTIONS],
      integration: authIntegration,
    });
    gateway.addRoutes({
      path: "/callback",
      methods: [HttpMethod.GET, HttpMethod.OPTIONS],
      integration: callbackIntegration,
    });

    // Update Lambda environment variables with the actual callback URL
    const callbackUrl = `${gateway.url!}callback`;

    authLambda.addEnvironment("CALLBACK_URL", callbackUrl);
    callbackLambda.addEnvironment("CALLBACK_URL", callbackUrl);

    new cdk.CfnOutput(this, `${this.stackName}-ApiGatewayUrl`, {
      key: "ApiGatewayUrl",
      exportName: "ApiGatewayUrl",
      value: gateway.url!,
      description: "Root origin of API Gateway",
    });

    new cdk.CfnOutput(this, `${this.stackName}-OauthCallbackUrl`, {
      key: "OauthCallbackUrl",
      exportName: "OauthCallbackUrl",
      value: callbackUrl,
      description: "Callback URL to configure in GitHub OAuth App",
    });

    // Output for Decap CMS configuration
    new cdk.CfnOutput(this, `${this.stackName}-DecapBaseUrl`, {
      key: "DecapBaseUrl",
      exportName: "DecapBaseUrl",
      value: gateway.url!.replace(/\/$/, ""), // Remove trailing slash
      description: "Base URL to use in Decap CMS config.yml",
    });
  }
}
