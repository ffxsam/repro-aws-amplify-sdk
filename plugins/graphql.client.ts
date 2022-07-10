// import { Amplify, API } from 'aws-amplify';

export default defineNuxtPlugin(() => {
  // const {
  //   public: {
  //     awsRegion,
  //     graphqlEndpoint,
  //     identityPoolId,
  //     userPoolId,
  //     userPoolClientId,
  //   },
  // } = useRuntimeConfig();

  // Amplify.configure({
  //   aws_appsync_graphqlEndpoint: graphqlEndpoint,
  //   aws_appsync_region: awsRegion,
  //   aws_appsync_authenticationType: 'AWS_IAM',

  //   Auth: {
  //     identityPoolId,
  //     region: awsRegion,
  //     userPoolId,
  //     userPoolWebClientId: userPoolClientId,
  //     mandatorySignIn: false,
  //   },
  // });

  // return {
  //   provide: { API },
  // };
});
