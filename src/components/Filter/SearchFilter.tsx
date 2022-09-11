import React from 'react'
import './SearchFilter.css'
import { useState } from "react";

export default function SearchFilter() {

    const [filter, setFilter] = useState("")
    console.log(filter);

    const filterHandler = (event:any) => {
        setFilter(event.target.value)
      }

  return (
    <form className='search'> 
        <input onChange={filterHandler} placeholder='Search names...'/>
    </form>
  )
}
