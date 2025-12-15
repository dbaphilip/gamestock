"use client";

import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import SkeletonGrid from "./SkeletonGrid";

export default function GameGrid() {
  const { games, error, isLoading } = useGames();

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
