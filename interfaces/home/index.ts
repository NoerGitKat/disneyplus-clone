export interface IVideo {
  createdAt: string;
  id: string;
  title: string;
  description: string;
  seen: null | boolean;
  slug: string;
  tags: string[];
  thumbnail: {
    url: string;
  };
  mp4: {
    url: string;
  };
}

export interface IVideos {
  videos: IVideo[];
}

export interface IAccount {
  username: string;
  avatar: {
    url: string;
  };
}

export interface IHomePageProps {
  videos: IVideo[];
  account: IAccount;
}
