"use client";

import { GameQuery } from "@/components/App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  slug: string;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export default function useGames(gameQuery: GameQuery) {
  //
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

  return { games, error, isLoading };
}
