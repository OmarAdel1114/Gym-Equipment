import React from 'react';

function Filter({ onFilter }) {
  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="">All</option>
      <option value="treadmill">Treadmills</option>
      <option value="dumbbell">Dumbbells</option>
      <option value="bar">Bars</option>
      <option value="machines">Machines</option>
      {/* Add more filter options as needed */}
    </select>
  );
}

export default Filter;