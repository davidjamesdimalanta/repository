import React, { useState } from "react";
import search from "../data/search";
import SearchItem from "./SearchItem";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(search);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    const filteredResults = search.filter(court =>
      court.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      court.stack.some(stackItem => stackItem.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="my-6 md:mx-6 flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Search for a court..."
        className="mb-6 p-2 w-9/12 border-b-2 border-blue-800"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="grid grid-col-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.map(court => (
          <SearchItem
            imgUrl={court.imgUrl}
            title={court.title}
            stack={court.stack}
            link={court.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
