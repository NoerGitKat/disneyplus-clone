import { gql } from "graphql-request";

const seeVideo = gql`
  mutation seeVideo($slug: String!) {
    updateVideo(data: { seen: true }, where: { slug: $slug }) {
      id
      title
      seen
    }
  }
`;

const publishVideo = gql`
  mutation publishVideo($slug: String!) {
    publishVideo(where: { slug: $slug }, to: PUBLISHED) {
      slug
    }
  }
`;

export { seeVideo, publishVideo };
