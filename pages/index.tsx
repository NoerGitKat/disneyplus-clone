import Image from "next/image";
import { IVideo, IVideos } from "../interfaces/home";
import { gqlClient } from "../graphql";
import { getVideos } from "./home/queries";
import styles from "../styles/Home.module.scss";
import getRandomVideo from "../utils/getRandomVideo";
import { useEffect, useState } from "react";
import Section from "../components/Section";
import filterVideos from "../utils/filterVideos";

export const getStaticProps = async () => {
  const { videos } = await gqlClient.request(getVideos);

  return { props: { videos } };
};

const Home = ({ videos }: IVideos) => {
  const initialState = {
    createdAt: "",
    id: "",
    title: "",
    description: "",
    seen: false,
    slug: "",
    tags: [""],
    thumbnail: {
      url: "https://media.graphcms.com/JhcKOBkQTu9ULX3JJySQ",
    },
    mp4: {
      url: "",
    },
  };
  const [video, setVideo] = useState<IVideo>(initialState);

  useEffect(() => {
    const randomVideo = getRandomVideo(videos);
    setVideo(randomVideo);
  }, [videos]);

  const genres = [
    "Family",
    "Cartoon",
    "Drama",
    "Animals",
    "Classics",
    "Romance",
    "3D",
    "Comedy",
    "War",
    "China",
  ];

  return (
    <div className={styles["home-container"]}>
      <div className={styles["main-video"]}>
        <Image
          src={video.thumbnail.url}
          alt={video.title}
          width={2400}
          height={1500}
          layout="responsive"
        />
      </div>
      <div className={styles["video-feed"]}>
        {genres.map((genre: string) => (
          <Section
            key={genre}
            genre={genre}
            videos={filterVideos(videos, genre)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
