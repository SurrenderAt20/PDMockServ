import React from "react";
import { ConvertedEmployee } from "ts/interfaces";
import "./CardsList.css";

export default function CardsList(props: any) {
  const getInitials = (string: any) => {
    const names = string.split(` `);
    let initials = names[0].substring(0, 1).toUpperCase;

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  return (
    <div className="container__container">
      <div className="cards__container">
        {props.userData?.map((user: ConvertedEmployee) => (
          <div key={user.id} className="list__item__card">
            <div>
              <h3>{getInitials}</h3>
            </div>
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
