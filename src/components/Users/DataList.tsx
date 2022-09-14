import "./DataList.css";
import "./../Filter/SearchFilter.css";
import User from "./User";
import { ConvertedEmployee } from "ts/interfaces";
import React, { useState } from "react";

export function DataList(props: any) {

  console.log(props);
  

  return (
    <div>
      {props.userData.map((user: ConvertedEmployee) => (
        <User
          id={user.id}
          fullName={user.fullName}
          birthday={user.birthday}
          salary={user.salary}
          gender={user.gender}
        />
      ))}
    </div>
  );
}

export default DataList;
