import React from 'react'
import "./User.css"

export default function User(props: any) {

    return (
          <div className="list__item">
            <h4>{props.fullName}</h4>
            <h4>{props.birthday}</h4>
            <h4>{props.salary}</h4>
            <h4>{props.gender}</h4>
          </div>
      );
}
