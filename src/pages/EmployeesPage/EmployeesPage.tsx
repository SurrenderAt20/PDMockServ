import NewUser from "components/NewUsers/NewUser";
import DataList from "components/Users/DataList";
import useFetchData from "hooks/useFetchData";
import { ConvertedEmployee } from "ts/interfaces";
import { useEffect, useState } from "react";

const EmployeesPage = () => {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState < ConvertedEmployee[] > ([]);
  
  //Do Fetch in here
  const {
    data,
    loading: isLoading,
    error: isError,
  } = useFetchData({ endpoint: "api/user" });
  
  //change to useEffect
  //ConvertedEmployee[] ✅ - Trying to get an array of users not just one instance

  useEffect (() => {
   setUsers( data.map((userData) => {
      return {
        id: userData.id,
        fullName: userData.name,
        birthday: userData.birthDate,
        salary: userData.wage,
        gender: userData.sex,
      };
    }))
  }, [data])

  const convertedUsers: ConvertedEmployee[] =
    data.map((userData) => {
      return {
        id: userData.id,
        fullName: userData.name,
        birthday: userData.birthDate,
        salary: userData.wage,
        gender: userData.sex,
      };
    }) || [];

  
  const onChangeSearchFilterHandler = (
    event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setFilter(event.target.value);
    };
    
    //Naming Convention - Where is it being used? ✅
    
    const searchConvertedUsers = (userData: ConvertedEmployee[]) => {
      return userData.filter(
        (user: ConvertedEmployee) =>
        user.fullName.toLowerCase().includes(filter) ||
        user.gender.toLowerCase().includes(filter) ||
        user.birthday.toLowerCase().includes(filter)
        );
      };
      
      //put in userState

  const addUserHandler = (user: ConvertedEmployee) => {
    setUsers((prevUsers: ConvertedEmployee[]) => {
      return [user, ...prevUsers];
    });
  };

  if (!isLoading && !data?.length) {
    return <div className="empty">There is no available data to fetch</div>;
  }

  console.log(users);
  

  return (
    <section className="container list__container">
      <NewUser onAddUser={addUserHandler} />

      <h2> Registered users </h2>

      {isLoading && <div className="loadingData"> Loading data... </div>}
      {isError && <div className="errorMessage">Could not fetch data</div>}

      {convertedUsers.length > 0 && (
        <div>
          <form className="search">
            <input
              onChange={onChangeSearchFilterHandler}
              placeholder="Search names..."
            />
          </form>
        </div>
      )}

      <div>
        <section>
          <div className="categories">
            <h4>Name</h4>
            <h4>Birthday</h4>
            <h4>Hourly salary</h4>
            <h4>Gender</h4>
          </div>

          <DataList userData={users}></DataList>
        </section>
      </div>
    </section>
    
  );
};

export default EmployeesPage;
