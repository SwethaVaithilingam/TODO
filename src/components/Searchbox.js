import React from "react";
import { IoSearch } from "react-icons/io5";

function Searchbox({ search, setSearch }) {
  return (
    <div className="search_container">
      <div className="search_bar">
        <IoSearch />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search_inp"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Searchbox;
