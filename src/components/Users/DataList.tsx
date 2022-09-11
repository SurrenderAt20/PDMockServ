import "./DataList.css";
import "./../Filter/SearchFilter.css"
import useFetchData from "hooks/useFetchData";
import User from "./User";
import UserFilter from "components/Filter/UserFilter";
import { ConvertedEmployee, Employee } from "ts/interfaces";
import React, { useState } from "react";

export function DataList() {

  const [filter, setFilter] = useState("")
    
  const {
    data,
    loading: isLoadingUsers,
    error: isUserError,
  } = useFetchData({ endpoint: "api/user" });
  
  const convertedUsers:ConvertedEmployee[] =
    data.map((userData) => {
      return {
        id: userData.id,
        fullName: userData.name,
        birthday: userData.birthDate,
        salary: userData.wage,
        gender: userData.sex
      };
    }) || [];

    console.log(convertedUsers);
    
    
    
    if (!isLoadingUsers && !data?.length){
      return(
        <div className="empty">There is no available data to fetch</div>
        )
      }

    const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value)
    }


    const search = (userData: any) => {
      return userData.filter(
        (user: ConvertedEmployee) => 
        user.fullName.toLowerCase().includes(filter) ||
        user.gender.toLowerCase().includes(filter) ||
        user.birthday.toLowerCase().includes(filter)
      )
    }
      


  return (
    <section className="container list__container">
      <h2> Registered users </h2>

      
      { isLoadingUsers && <div className="loadingData"> Loading data... </div>}
      { isUserError && <div className="errorMessage">Could not fetch data</div>}

      <div>

        {data.length > 0 &&
          <div> 

        <form className='search'> 
            <input onChange={filterHandler} placeholder='Search names...'/>
        </form>


            <UserFilter/>
          </div>
        }

          <div className="categories">
            <h4>Name</h4>
            <h4>Birthday</h4>
            <h4>Hourly salary</h4>
            <h4>Gender</h4>
          </div>

        {search(convertedUsers).map((user:any) => (
            <User
              fullName={user.fullName}
              birthday={user.birthday}
              salary={user.salary}
              gender={user.gender}
            />
        ))}
      </div>
    </section>
  );




}

export default DataList;
