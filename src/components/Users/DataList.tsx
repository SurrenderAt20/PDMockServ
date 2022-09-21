import "./DataList.css";
import "./../Filter/SearchFilter.css";
import User from "./User";
import { ConvertedEmployee } from "ts/interfaces";

<<<<<<< HEAD
export function DataList(props: any) {
=======
export function DataList(props: any) {  

>>>>>>> 851debd37892d46647c8da6df4356f39533e4957
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
