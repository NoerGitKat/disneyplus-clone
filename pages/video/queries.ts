import { gql } from "graphql-request";

const getVideo = gql`
  query getVideo($slug: String!) {
    video(where: { slug: $slug }) {
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

export { getVideo };
