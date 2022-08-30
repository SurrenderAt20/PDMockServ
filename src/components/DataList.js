import "./DataList.css";
import { useState } from "react";
import useFetchData from "hooks/useFetchData";

export function DataList() {
  const {data, loading: isLoadingUsers, error: isUserError,} = useFetchData({endpoint: "https://jsonplaceholder.typicode.com/users"});
  const convertedUsers = data.map((userData) => {
    return {
      id: userData.id,
      fullName: userData.name,
      username: userData.username,
      email: userData.email,
    };
  }) || [];

  console.log({data})

  return (
    <section className="container list__container">
      <h5> Click the button to see an overview of registered users </h5>
      <h2> Registered users </h2>

{/*       <div className="btn__container">
        <button className="btn" title="fetchUsers" onClick={fetchData}>
          <b>Test Button - Fetch Users</b>
        </button>
      </div> */}

      <div>
        {convertedUsers?.map((user) => (
          <div key={user.id} className="list__item">
            <h4>{user.fullName}</h4>
            <h4>{user.username}</h4>
            <h4>{user.email}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DataList;
