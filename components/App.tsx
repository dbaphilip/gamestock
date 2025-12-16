"use client";

import { useState } from "react";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";
import Navbar from "./Navbar";
import { Genre } from "@/hooks/useGenres";
import PlatformSelector from "./PlatformSelector";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className="container">
      <Navbar />

      <div className="row mt-5">
        <div className="col-3 d-none d-md-block">
          <aside>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </aside>
        </div>

        <div className="col-md-9">
          <main>
            <div className="mb-5 row">
              <div className="col-md-4">
                <PlatformSelector />
              </div>
            </div>

            <div className="row">
              <GameGrid selectedGenre={selectedGenre} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
