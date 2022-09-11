import React from 'react'
import './UserFilter.css'

export default function UserFilter(filterProps: any) {

    const dropdownChangeHandler = (event: any) => {
        filterProps.onChangeFilter(event.target.value)
    }


  return (

    <label className="filter">
    <b>Filter by gender:</b>
    <select value={filterProps.selected} onChange={dropdownChangeHandler}>
      <option>All</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </label>

  )
}
