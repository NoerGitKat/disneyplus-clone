import { IVideo } from "../interfaces";

const getRandomVideo = (videos: IVideo[]) => {
  const randomNumber = Math.floor(Math.random() * videos.length);
  return videos[randomNumber];
};

export default getRandomVideo;
