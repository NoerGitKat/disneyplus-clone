import { gql } from "graphql-request";

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

const getAccount = gql`
  query ($id: ID!) {
    account(where: { id: $id }) {
      username
      avatar {
        url
      }
    }
  }
`;

export { getVideos, getAccount };
