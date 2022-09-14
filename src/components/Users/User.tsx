import React from 'react'
import "./User.css"
import { ConvertedEmployee } from 'ts/interfaces';

export default function User(props: ConvertedEmployee) {

    return (
          <div key={props.id} className="list__item">
            <h4>{props.fullName}</h4>
            <h4>{props.birthday}</h4>
            <h4>{props.salary}</h4>
            <h4>{props.gender}</h4>
          </div>
      );
}
