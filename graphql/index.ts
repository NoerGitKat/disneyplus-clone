import { GraphQLClient } from "graphql-request";

const gqlEndpoint = process.env.GRAPHCMS_ENDPOINT;

const gqlClient = new GraphQLClient(gqlEndpoint, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export { gqlClient };
