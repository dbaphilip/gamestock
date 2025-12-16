"use client";

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

export default function useGames(selectedGenre: Genre | null) {
  //
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

  return { games, error, isLoading };
}
