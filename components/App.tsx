"use client";

import { useState } from "react";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";
import Navbar from "./Navbar";
import { Genre } from "@/hooks/useGenres";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className="container">
      <Navbar />

      <div className="row mt-5">
        <div className="col-3 d-none d-md-block">
          <aside>
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </aside>
        </div>

        <div className="col-md-9">
          <main>
            <div className="row">
              <GameGrid selectedGenre={selectedGenre} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
