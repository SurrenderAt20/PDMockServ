import React from "react";
import { ConvertedEmployee } from "ts/interfaces";
import "./CardsList.css";

export default function CardsList(props: any) {
  return (
    <div className="cards__container">
      <div className="card">
        {props.userData?.map((user: ConvertedEmployee) => (
          <div key={user.id} className="list__item__card">
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
