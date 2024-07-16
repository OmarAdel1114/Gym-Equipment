import React from 'react';
import "./filterbar.css";

function Filter({ onFilter }) {
  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="">All</option>
      <option value="treadmill">Treadmills</option>
      <option value="dumbbell">Dumbbells</option>
      {/* Add more filter options as needed */}
    </select>
  );
}

export default Filter;
