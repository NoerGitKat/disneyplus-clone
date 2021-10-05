import { gql, GraphQLClient } from "graphql-request";

const gqlEndpoint = process.env.GRAPHCMS_ENDPOINT;

const gqlClient = new GraphQLClient(gqlEndpoint, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

const getVideos = gql`
  query {
    videos {
      createdAt
      id
      title
      description
      seen
      slug
      tags
      thumbnail {
        url
      }
      mp4 {
        url
      }
    }
  }
`;

export { gqlClient, getVideos };
