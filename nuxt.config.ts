import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    /**
     * These values don't really matter, we're just testing build, not runtime
     * which we know works.
     */
    public: {
      awsRegion: "us-east-1",
      graphqlEndpoint: "https://doesnt-matter.org/graphql",
      identityPoolId: "us-east-1:doesnt-matter",
      userPoolId: "abc123",
      userPoolClientId: "123fff",
    },
  },
});
