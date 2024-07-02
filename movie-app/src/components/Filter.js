import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [filter, setFilter] = useState({ name: '', value: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
    onFilter(name, value);
  };

  return (
    <div className="filter">
      <h3>Filter Movies</h3>
      <input
        type="text"
        name="title"
        placeholder="Filter by title"
        value={filter.title}
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="rating"
        placeholder="Filter by rating"
        value={filter.rating}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
