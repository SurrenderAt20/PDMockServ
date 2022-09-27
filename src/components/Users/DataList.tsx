import "./DataList.css";
import User from "./User";
import { ConvertedEmployee } from "ts/interfaces";

export function DataList(props: any) {
  return (
    <div>
      <div className="categories">
        <h4>Name</h4>
        <h4>Birthday</h4>
        <h4>Hourly salary</h4>
        <h4>Gender</h4>
      </div>

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
