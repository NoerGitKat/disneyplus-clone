import React from "react";
import { ISection } from "../../interfaces";
import Card from "../Card";

const Section = ({ genre, videos }: ISection) => {
  return (
    <section>
      <h3>{genre}</h3>
      <ul>
        {videos.map((video) => (
          <li key={video.title}>
            <a href={`/video/${video.slug}`}>
              <Card thumbnail={video.thumbnail} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
