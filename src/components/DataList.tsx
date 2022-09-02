import "./DataList.css";
import useFetchData from "hooks/useFetchData";
import { useState } from "react";
import { ConvertedEmployee, Employee } from "ts/interfaces";

export function DataList() {

  const [filter, setFilter] = useState("gender")

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

  return (
    <section className="container list__container">
      <h2> Registered users </h2>

      { isLoadingUsers && <div className="loadingData"> Loading data... </div>}
      { isUserError && <div className="errorMessage">Could not fetch data</div>}

      <div>

        <label className="filter">
          <b>Filter:</b>
          <select>
            <option>All</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>

          <div className="headline">
            <h4>Name</h4>
            <h4>Birthday</h4>
            <h4>Hourly salary</h4>
            <h4>Gender</h4>
          </div>

        {convertedUsers?.map((user) => (
          <div key={user.id} className="list__item">
            <h4>{user.fullName}</h4>
            <h4>{user.birthday}</h4>
            <h4>{user.salary}</h4>
            <h4>{user.gender}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DataList;
