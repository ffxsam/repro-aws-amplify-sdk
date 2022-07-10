# Nuxt 3 + AWS SDKs

This repo is a fresh out-of-the-box install of Nuxt 3 RC 4, and the latest versions of AWS Amplify and AWS JS SDK v3.

## AWS Amplify (GraphQL API)

Amplify works in dev mode, but fails during build.

### Steps to Reproduce

1. Uncomment the code in `plugins/graphql.client.ts`.
1. Run `yarn build`.

### Result

<details>
<summary>(expand)</summary>

```
 ERROR  'request' is not exported by __vite-browser-external, imported by node_modules/@aws-sdk/credential-provider-node/node_modules/@aws-sdk/credential-provider-imds/dist/es/remoteProvider/httpRequest.js
file: /Users/samh/repro-aws-amplify-sdk/node_modules/@aws-sdk/credential-provider-node/node_modules/@aws-sdk/credential-provider-imds/dist/es/remoteProvider/httpRequest.js:4:9
2: import { ProviderError } from "@aws-sdk/property-provider";
3: import { Buffer } from "buffer";
4: import { request } from "http";
            ^
5: /**
6:  * @internal


 ERROR  'request' is not exported by __vite-browser-external, imported by node_modules/@aws-sdk/credential-provider-node/node_modules/@aws-sdk/credential-provider-imds/dist/es/remoteProvider/httpRequest.js

  at error (node_modules/rollup/dist/shared/rollup.js:198:30)
  at Module.error (node_modules/rollup/dist/shared/rollup.js:12555:16)
  at Module.traceVariable (node_modules/rollup/dist/shared/rollup.js:12914:29)
  at ModuleScope.findVariable (node_modules/rollup/dist/shared/rollup.js:11566:39)
  at FunctionScope.findVariable (node_modules/rollup/dist/shared/rollup.js:6486:38)
  at ChildScope.findVariable (node_modules/rollup/dist/shared/rollup.js:6486:38)
  at FunctionScope.findVariable (node_modules/rollup/dist/shared/rollup.js:6486:38)
  at ChildScope.findVariable (node_modules/rollup/dist/shared/rollup.js:6486:38)
  at Identifier.bind (node_modules/rollup/dist/shared/rollup.js:7553:40)
  at CallExpression.bind (node_modules/rollup/dist/shared/rollup.js:5383:23)
```
</details>

## AWS JS SDK v3

It would be great to make SDK calls on the server side. This would (in some instances) remove the need for API calls, reducing latency & potential cold starts by half:

> Nuxt app ❄️ » API Gateway » Lambda ❄️ » SDK call

to this:

> Nuxt app ❄️ » SDK call

Unfortunately, this results in a runtime error in dev mode.

### Steps to Reproduce
1. Uncomment the code in `app.vue`'s script block'.
1. Run `yarn dev`.

### Result

```
[nuxt] [request error] Identifier 'module' has already been declared
  at ESMLoader.moduleStrategy (node:internal/modules/esm/translators:117:18)
  at ESMLoader.moduleProvider (node:internal/modules/esm/loader:337:14)
  at async link (node:internal/modules/esm/module_job:70:21)
```

Interestingly enough, though, this code is buildable and works in production!
