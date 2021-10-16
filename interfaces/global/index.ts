import { IVideo } from "..";

export interface ISection {
  genre: string;
  videos: IVideo[];
}

export interface ICard {
  thumbnail: {
    url: string;
  };
}

export interface INavProps {
  account: {
    username: string;
    avatar: {
      url: string;
    };
  };
}
