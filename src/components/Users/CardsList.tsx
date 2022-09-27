import React from "react";
import { ConvertedEmployee } from "ts/interfaces";
import "./CardsList.css";

export default function CardsList(props: any) {
  return (
    <div className="container__container">
    <div className="cards__container">
        {props.userData?.map((user: ConvertedEmployee) => (
          <div key={user.id} className="list__item__card">
            <div><h3>{user.initials}</h3></div>
            <h4>{user.fullName}</h4>
            <h4>{user.birthday}</h4>
            <h4>{user.salary}</h4>
            <h4>{user.gender}</h4>
          </div>
        ))}
      </div>
      </div>
  );
}
