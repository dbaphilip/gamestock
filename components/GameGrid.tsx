"use client";

import useGames from "@/hooks/useGames";
import { GameQuery } from "./App";
import GameCard from "./GameCard";
import SkeletonGrid from "./SkeletonGrid";

interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  //
  const { games, error, isLoading } = useGames(gameQuery);

  if (isLoading) return <SkeletonGrid />;

  return (
    <>
      {error && <h1 className="gochi text-danger"> {error}</h1>}

      {games.map((game) => (
        <div key={game.id} className="col-md-4">
          <GameCard game={game} />
        </div>
      ))}
    </>
  );
}
