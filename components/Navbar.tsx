import { IoGameController } from "react-icons/io5";
import SearchForm from "./SearchForm";

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
        <SearchForm />
      </div>
    </div>
  );
}
