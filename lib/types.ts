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
