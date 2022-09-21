import "./DataList.css";
import "./../Filter/SearchFilter.css";
import User from "./User";
import { ConvertedEmployee } from "ts/interfaces";

export function DataList(props: any) {
  return (
    <div>
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

export default DataList;
