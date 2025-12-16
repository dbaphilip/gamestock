import GameGrid from "@/components/GameGrid";
import Navbar from "../components/Navbar";
import GenreList from "@/components/GenreList";

export default function Home() {
  return (
    <div className="container">
      <Navbar />

      <div className="row mt-5">
        <div className="col-3 d-none d-md-block">
          <aside>
            <GenreList />
          </aside>
        </div>

        <div className="col-md-9">
          <main>
            <div className="row">
              <GameGrid />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
