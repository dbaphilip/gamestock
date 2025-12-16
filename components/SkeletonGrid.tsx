"use client";

import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const skeletons = [1, 2, 3, 4, 5];

  return (
    <>
      {skeletons.map((skel) => (
        <div key={skel} className="col-md-4">
          <div className="mb-5 shadow-sec skeleton"></div>
        </div>
      ))}
    </>
  );
}
