import "./DataList.css";
import { ConvertedEmployee } from "ts/interfaces";

interface DataListProps {
  userData: ConvertedEmployee[]
}

export function DataList(props: DataListProps) {

  return (
    <div>
      <div className="categories">
        <h4>Name</h4>
        <h4>Birthday</h4>
        <h4>Hourly salary</h4>
        <h4>Gender</h4>
      </div>


      {props.userData?.map((user: ConvertedEmployee) => (
        <div key={user.id} className="list__item__row">
          <h4>{user.fullName}</h4>
          <h4>{user.birthday}</h4>
          <h4>{user.salary}</h4>
          <h4>{user.gender}</h4>
        </div>
      ))}
    </div> 
  );
}

export default DataList;
