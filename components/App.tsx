"use client";

import { useState } from "react";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";
import Navbar from "./Navbar";
import { Genre } from "@/hooks/useGenres";
import PlatformSelector from "./PlatformSelector";
import { Platform } from "@/hooks/usePlatforms";
import SortSelector from "./SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="container">
      <Navbar />

      <div className="row mt-5">
        <div className="col-3 d-none d-md-block">
          <aside>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </aside>
        </div>

        <div className="col-md-9">
          <main>
            <div className="mb-5 row">
              <div className="col-md-4">
                <PlatformSelector
                  onSelectPlatform={(platform) =>
                    setGameQuery({
                      ...gameQuery,
                      platform: JSON.parse(platform),
                    })
                  }
                />
              </div>

              <div className="col-md-4">
                <SortSelector
                  selectedSortOrder={gameQuery.sortOrder}
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </div>
            </div>

            <div className="row">
              <GameGrid gameQuery={gameQuery} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
