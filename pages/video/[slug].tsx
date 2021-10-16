import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { gqlClient } from "../../graphql";
import { IVideoPageProps } from "../../interfaces";
import { getVideo } from "./queries";
import { useState } from "react";
import styles from "./../../styles/Video.module.scss";
import { getAccount } from "../home/queries";
import Navbar from "../../components/Navbar";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  const slugVar = { slug };
  const accountVar = { id: "ckub9z8x4sf2w0c04c4vemevs" };

  const { video } = await gqlClient.request(getVideo, slugVar);

  const { account } = await gqlClient.request(getAccount, accountVar);

  return {
    props: {
      video,
      account,
    },
  };
};

const changeVideoToSeen = async (slug: string) => {
  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  };
  await fetch("/api/graphql", opts);
};

const Video = ({ video, account }: IVideoPageProps) => {
  const [isWatching, setIsWatching] = useState(false);

  const playVideo = (isWatching: boolean, slug?: string) => {
    setIsWatching(isWatching);
    if (slug) changeVideoToSeen(slug);
  };

  return (
    <main className={styles["video-container"]}>
      <Navbar account={account} />
      <Image
        src={video.thumbnail.url}
        alt={video.title}
        height={50}
        width={90}
        layout="responsive"
      />
      <section className={styles["text-overlay"]} onClick={() => playVideo(false)}>
        <button>
          <Link href="/">Go Back</Link>
        </button>
        <p>TAGS: {video.tags.join(", ")}</p>
        <p>DESCRIPTION: {video.description}</p>
        <button onClick={() => playVideo(true, video.slug)}>Play</button>
      </section>
      {isWatching && (
        <section className={styles["video-overlay"]}>
          <video src={video.mp4.url} controls />
        </section>
      )}
    </main>
  );
};

export default Video;
