import React from "react";
import User from "./User";
import { ConvertedEmployee } from "ts/interfaces";
import './CardsList.css'

export default function CardsList(props: any) {
  return (
    <div className="cards__container">
      {props.userData?.map((user: ConvertedEmployee) => (
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
