"use client";

import { useState } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function SearchForm({ onSearch }: Props) {
  //
  const [searchText, setSearchText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchText);
      }}
    >
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="search games..."
        className="form-control fs-2 shadow-pri"
      />
    </form>
  );
}
