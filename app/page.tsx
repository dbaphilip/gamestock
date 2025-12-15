import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar />

      <div className="row mt-5">
        <div className="col-4 d-none d-md-block">
          <aside style={{ backgroundColor: "red", height: "300px" }}></aside>
        </div>

        <div className="col-md-8">
          <main style={{ backgroundColor: "yellow", height: "300px" }}></main>
        </div>
      </div>
    </div>
  );
}
