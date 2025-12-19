import { IoGameController } from "react-icons/io5";
import SearchForm from "./SearchForm";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function Navbar({ onSearch }: Props) {
  //
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
        <SearchForm onSearch={(searchText) => onSearch(searchText)} />
      </div>
    </div>
  );
}
