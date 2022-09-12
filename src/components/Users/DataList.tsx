import "./DataList.css";
import useFetchData from "hooks/useFetchData";
import User from "./User";
import { ConvertedEmployee, Employee } from "ts/interfaces";

export function DataList(props: any) {

  const {
    data,
    loading: isLoadingUsers,
    error: isUserError,
  } = useFetchData({ endpoint: "api/user" });
  
  const convertedUsers:ConvertedEmployee[] =
    data.map((userData) => {
      
      return {
        id: userData.id,
        fullName: userData.name,
        birthday: userData.birthDate,
        salary: userData.wage,
        gender: userData.sex
      };
    }) || [];


    if (!isLoadingUsers && !data?.length){
      return(
        <div className="empty">There is no available data to fetch</div>
      )
    }


  return (
    <section className="container list__container">
      <h2> Registered users </h2>

      
      { isLoadingUsers && <div className="loadingData"> Loading data... </div>}
      { isUserError && <div className="errorMessage">Could not fetch data</div>}

      <div>

        {data.length > 0 &&

        <label className="filter">
          <b>Filter:</b>
          <select>
            <option>All</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>

        }

          <div className="headline">
            <h4>Name</h4>
            <h4>Birthday</h4>
            <h4>Hourly salary</h4>
            <h4>Gender</h4>
          </div>

        {convertedUsers.map((user) => (
            <User 
              fullName={user.fullName}
              birthday={user.birthday}
              salary={user.salary}
              gender={user.gender}
            />
        ))}
      </div>
    </section>
  );




}

export default DataList;
