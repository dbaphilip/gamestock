"use client";

import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const { games, error } = useGames();

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
