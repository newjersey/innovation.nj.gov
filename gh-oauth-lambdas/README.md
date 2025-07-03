# CDK Stack for DecapCMS + GitHub OAuth integration

This AWS CDK stack defines two Lambda functions and a single API Gateway through which we facilitate OAuth between DecapCMS and our GitHub org for CMS Authentication. There should rarely be a need to change this, but if you do see directions below for deploying.

## Deploying the CDK Stack

1. First you need to get the value for the `GITHUB_CLIENT_ID` environment variable. This is stored in our Bitwarden vault under `Decap OAuth Github App`.

2. Once you're ready to deploy, make sure your current working directory is `./gh-oauth-lambdas/`. Then run:

```sh
GITHUB_CLIENT_ID="[client-id]" npx cdk deploy
```
