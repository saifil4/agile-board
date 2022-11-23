import React from "react";

const Search = ({ setSearchValue }) => {
  return (
    <input
      type="text"
      className="searchbox mr-4"
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search"
    />
  );
};

export default Search;
