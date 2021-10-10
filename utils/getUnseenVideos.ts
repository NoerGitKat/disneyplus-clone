import { IVideo } from "../interfaces";

const getUnseenVideos = (videos: IVideo[]) => {
  return videos.filter((video) => !video.seen);
};

export default getUnseenVideos;
