import GameGrid from "@/components/GameGrid";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar />

      <div className="row mt-5">
        <div className="col-3 d-none d-md-block">
          <aside style={{ backgroundColor: "red", height: "300px" }}></aside>
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
