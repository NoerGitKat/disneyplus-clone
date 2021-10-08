import { GetServerSideProps } from "next";
import { gqlClient } from "../../graphql";
import { IServerSideProps } from "../../interfaces";
import { getVideo } from "./queries";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  const variables = { slug };

  const video = await gqlClient.request(getVideo, variables);

  return {
    props: {
      video,
    },
  };
};

const Video = ({ video }: IServerSideProps) => {
  return <div>video</div>;
};

export default Video;
