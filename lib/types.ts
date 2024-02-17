export type NewUpcomingGameCardProps = {
  id: number;
  name: string;
  img: string;
};

export type GameCardProps = {
  id: number;
  slug: string;
  name: string;
  img: string;
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
