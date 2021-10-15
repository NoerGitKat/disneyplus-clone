import Image from "next/image";
import { IVideo, IVideos } from "../interfaces/home";
import { gqlClient } from "../graphql";
import { getVideos } from "./home/queries";
import styles from "../styles/Home.module.scss";
import getRandomVideo from "../utils/getRandomVideo";
import { useEffect, useState } from "react";
import Section from "../components/Section";
import filterVideos from "../utils/filterVideos";
import getUnseenVideos from "../utils/getUnseenVideos";

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
    "Recommended For You",
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
    <main className={styles["home-container"]}>
      <div className={styles["main-video"]}>
        <Image
          src={video.thumbnail.url}
          alt={video.title}
          width={240}
          height={150}
          layout="responsive"
        />
      </div>
      <div className={styles["video-feed"]}>
        {genres.map((genre: string) => {
          if (genre === "Recommended For You") {
            return (
              <Section
                key={genre}
                genre={genre}
                videos={getUnseenVideos(videos)}
              />
            );
          }
          return (
            <Section
              key={genre}
              genre={genre}
              videos={filterVideos(videos, genre)}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
