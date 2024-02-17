export type NewUpcomingGameCardProps = {
  id: number;
  name: string;
  img: string;
};

export type GameCardProps = {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  genres: {
    id: number;
    slug: string;
    name: string;
  }[];
};

export type GenresProps = {
  id: number;
  slug: string;
  name: string;
};

export interface IScreenschots {
  screenshots: screenshot[];
}
export type screenshot = {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
};

export interface INavLink extends React.HTMLProps<HTMLAnchorElement> {
  category: {
    name: string;
    href: string;
  };
}

export type RatingProps = {
  id: number;
  title: string;
  count: number;
  percent: number;
};
export interface IRating {
  ratings: RatingProps[];
}

export type GameSeriesProps = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
};
