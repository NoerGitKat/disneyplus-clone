import { IVideos } from "../interfaces/home";
import { gqlClient } from "../graphql";
import { getVideos } from "./home/queries";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  const { videos } = await gqlClient.request(getVideos);

  return { props: { videos } };
};

const Home = ({ videos }: IVideos) => {
  console.log("videos are", videos);
  return <div className={styles.container}>hello</div>;
};

export default Home;
