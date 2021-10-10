import React from "react";
import { ISection } from "../../interfaces";

const Section = ({ genre, videos }: ISection) => {
  return (
    <section>
      <h3>{genre}</h3>
      <ul>
        {videos.map((video) => (
          <li key={video.title}>{video.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
