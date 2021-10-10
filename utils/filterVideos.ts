import { IVideo } from "../interfaces";

const filterVideos = (videos: IVideo[], genre: string) => {
  return videos.filter((video: IVideo) => video.tags.includes(genre));
};

export default filterVideos;
