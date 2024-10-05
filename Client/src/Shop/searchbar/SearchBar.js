import React, { useState } from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // Call the onSearch prop function with the current search query
    onSearch(query.toLowerCase()); // Perform search in lowercase for case-insensitive search
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