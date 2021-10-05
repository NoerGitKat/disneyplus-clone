import type { NextPage } from "next";
import { IVideos } from "../interfaces/home";
import styles from "../styles/Home.module.scss";
import { getVideos, gqlClient } from "./home/data";

export const getStaticProps = async () => {
  const { videos } = await gqlClient.request(getVideos);

  return { props: { videos } };
};

const Home: NextPage = ({ videos }: IVideos) => {
  console.log("videos are", videos);
  return <div className={styles.container}>hello</div>;
};

export default Home;
