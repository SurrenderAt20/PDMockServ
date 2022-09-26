import React from "react";
import planday from "./../../assets/planday.png";
import "./Routing.css";

export default function Routing() {
  return (
    <nav>
      <ul>
        <li>
          <img src={planday} alt="Planday" />
        </li>
        <li>
          <button> Home </button>
        </li>
        <li>
          <button> Schedule </button>
        </li>
        <li>
          <button> People </button>
        </li>
        <li>
          <button> Reports </button>
        </li>
        <li>
          <button> Payroll </button>
        </li>
        <li>
          <button> Settings </button>
        </li>
      </ul>
    </nav>
  );
}
