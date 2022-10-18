import "./DataList.css";
import { ConvertedEmployee } from "ts/interfaces";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Data } from "styled-icons/boxicons-regular";

interface DataListProps {
  userData: ConvertedEmployee[];
}

export function DataList(props: DataListProps) {
  const [changeDetails, setChangeDetails] = useState(false);

  return (
    <div>
      {props.userData?.map((user: ConvertedEmployee) => (
        <div key={user.id} className="list__item__row">
          <h4>{user.fullName}</h4>
          <h4>{user.birthday}</h4>
          <h4>{user.salary}</h4>
          <h4>{user.gender}</h4>
          <h4>
            <AiFillEdit />
          </h4>
        </div>
      ))}
    </div>
  );
}

export default DataList;
