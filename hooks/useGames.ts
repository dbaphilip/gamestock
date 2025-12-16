"use client";

import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  slug: string;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export default function useGames() {
  const { data: games, error, isLoading } = useData<Game>("/games");

  return { games, error, isLoading };
}
