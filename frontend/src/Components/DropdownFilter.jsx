import React from "react";

const DropdownFilter = ({ options, selected, onChange }) => {
  return (
    <div className="dropdown-filter-container">
      <h3 id="filters-heading">Status</h3>
      <select value={selected} onChange={(e) => onChange(e.target.value)} className="dropdown-filter">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;
