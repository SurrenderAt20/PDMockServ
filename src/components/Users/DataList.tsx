import "./DataList.css";
import "./../Filter/SearchFilter.css";
import useFetchData from "hooks/useFetchData";
import User from "./User";
import { ConvertedEmployee } from "ts/interfaces";
import React, { useState } from "react";


export function DataList() {
  const [filter, setFilter] = useState("");

//more general naming convention ✅

  const {
    data,
    loading: isLoading,
    error: isError,
  } = useFetchData({ endpoint: "api/user" });

  //ConvertedEmployee[] ✅ - Trying to get an array of users not just one instance

  const convertedUsers: ConvertedEmployee[] =
    data.map((userData) => {
      return {
        id: userData.id,
        fullName: userData.name,
        birthday: userData.birthDate,
        salary: userData.wage,
        gender: userData.sex,
      };
    }) || [];

    //Naming Convention - Where is it being used? ✅
    
    const onChangeSearchFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value);
    };

        //Naming Convention - Where is it being used? ✅

  const searchConvertedUsers = (userData: ConvertedEmployee[]) => {
    return userData.filter(
      (user: ConvertedEmployee) =>
      user.fullName.toLowerCase().includes(filter) ||
      user.gender.toLowerCase().includes(filter) ||
      user.birthday.toLowerCase().includes(filter)
      );
    };

//Add Other Filters - Radio Buttons / Checkbox

    
    if (!isLoading && !data?.length) {
      return <div className="empty">There is no available data to fetch</div>;
    }

    
  return (
    <section className="container list__container">
      <h2> Registered users </h2>

      {isLoading && <div className="loadingData"> Loading data... </div>}
      {isError && <div className="errorMessage">Could not fetch data</div>}

      <div>
        {data.length > 0 && (
          <div>
            <form className="search">
              <input onChange={onChangeSearchFilterHandler} placeholder= "Search names..." />
            </form>
          </div>
        )}
      <section>
        <div className="categories">
          <h4>Name</h4>
          <h4>Birthday</h4>
          <h4>Hourly salary</h4>
          <h4>Gender</h4>
        </div>
        

        {searchConvertedUsers(convertedUsers).map((user: ConvertedEmployee) => (
          <User
            fullName={user.fullName}
            birthday={user.birthday}
            salary={user.salary}
            gender={user.gender}
          />
        ))}

      </section>
      </div>
    </section>
  );
}

export default DataList;
