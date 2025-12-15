"use client";

import apiClient from "@/services/api-client";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  slug: string;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GamesResponse>("/games")
      .then((res: AxiosResponse) => setGames(res.data.results))
      .catch((err: AxiosError) => setError(err.message));
  }, []);

  return (
    <>
      {error && <h1 className="gochi text-danger"> {error}</h1>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
