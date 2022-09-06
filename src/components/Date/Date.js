import React from "react";

export default function Date(props) {
  const day = props.birthDate.toLocaleString("en-US", { month: "long" });
  const month = props.birthDate.toLocaleString("en-US", { day: "2-digit" });
  /* const year = props.birthDate.getFullYear(); */

  return (
    <div className="birthDateParent">
      <div className="day">{day}</div>
      <div className="month">{month}</div>
      {/* <div className="year">{year}</div> */}
    </div>
  );
}
