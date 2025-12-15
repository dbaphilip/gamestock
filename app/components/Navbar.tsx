import { IoGameController } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="row">
      <div className="col-md-4">
        <span className="fs-1">
          Ga
          <IoGameController />
          eStock
        </span>
      </div>
      <div className="col-md-6">
        <form>
          <input
            placeholder="search games..."
            type="password"
            className="form-control fs-2 shadow-pri"
          />
        </form>
      </div>
    </div>
  );
}
