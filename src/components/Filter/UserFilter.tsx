import React from "react";
import { GenderFilterOption } from "ts/interfaces";
import "./UserFilter.css";

interface UserFilterProps {
  selectedOption?: GenderFilterOption;
  onChange: (value: GenderFilterOption) => void;
}

export default function UserFilter({
  selectedOption,
  onChange,
}: UserFilterProps) {
  const handleOnChange = (event: any) => {
    onChange(event.target.value as GenderFilterOption);
  };

  return (
    <label className="filter">
      <b>Filter by gender:</b>
      <select value={selectedOption} onChange={handleOnChange}>
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </label>
  );
}
