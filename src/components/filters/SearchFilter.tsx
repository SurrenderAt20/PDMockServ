import React from 'react'
import './SearchFilter.css'
import { useState } from "react";
import { Name } from 'ts/interfaces';

export default function SearchFilter() {
  const [searchFilter, setSearchFilter] = useState<Name>("");
  console.log(searchFilter);

  const searchFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  return (
    <form className='search'> 
        <input placeholder='Search names...'/>
    </form>
  )
}
