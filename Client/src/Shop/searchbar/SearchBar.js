import React, { useState } from 'react';
import "./searchbar.css";

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={handleSearch}
    />
  );
}

export default Search;
