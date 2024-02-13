"use server";
import { GenresProps } from "@/lib/types";
import RAWG from "./axios";

export const fetchGeneres = async () => {
  const data = await RAWG.get("genres");
  const genresData = await data.data.results;
  return genresData;
};
