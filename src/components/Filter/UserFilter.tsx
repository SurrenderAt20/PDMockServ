import React from 'react'
import './UserFilter.css'

export default function UserFilter(props: any) {

    const dropdownChangeHandler = (event: any) => {
        props.onChangeFilter(event.target.value)
        console.log(event.target.value)
    }

  return (
    <label className="filter">
    <b>Filter by gender:</b>
    <select value={props.selected} onChange={dropdownChangeHandler}>
      <option value={undefined}>All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </label>

  )
}
