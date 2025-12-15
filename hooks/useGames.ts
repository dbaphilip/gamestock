"use client";

import apiClient from "@/services/api-client";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  slug: string;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface GamesResponse {
  count: number;
  results: Game[];
}

export default function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<GamesResponse>("/games")
      .then((res: AxiosResponse) => setGames(res.data.results))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { games, error, isLoading };
}
