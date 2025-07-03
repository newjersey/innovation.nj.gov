#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { GhOauthLambdasStack } from "../lib/gh-oauth-lambdas-stack";

const app = new cdk.App();

// Get configuration from context or environment
const githubClientId =
  app.node.tryGetContext("githubClientId") || process.env.GITHUB_CLIENT_ID;
const githubClientSecretParam =
  app.node.tryGetContext("githubClientSecretParam") ||
  "/innovation-nj-gov/GitHubClientSecret";
const allowedOrigins =
  app.node.tryGetContext("allowedOrigins")?.split(",") || undefined;

if (!githubClientId) {
  throw new Error(
    "GitHub Client ID is required. Set via context or GITHUB_CLIENT_ID env var",
  );
}

new GhOauthLambdasStack(app, "innovation-nj-gov-cms-GhOauthLambdasStack", {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */
  /* Uncomment the next line to specialize this stack for the AWS Account
  //  * and Region that are implied by the current CLI configuration. */
  env: {
    account: process.env.AWS_ACCOUNT,
    region: process.env.AWS_REGION,
  },
  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
  githubClientId,
  githubClientSecretParameterName: githubClientSecretParam,
  allowedOrigins,
});
