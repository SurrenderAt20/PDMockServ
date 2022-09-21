import NewUser from "components/NewUsers/NewUser";
import DataList from "components/Users/DataList";
import useFetchData from "hooks/useFetchData";
import { ConvertedEmployee, EmployeeFilter, Gender } from "ts/interfaces";
import { useEffect, useState } from "react";
import UserFilter from "components/Filter/UserFilter";

function filterUsers(users: ConvertedEmployee[], filters: EmployeeFilter) {
  let filteredUsers = [...users];

  if (filters.gender) {
    filteredUsers.filter(user => user.gender !== filters.gender);
  }

  return filteredUsers;
}

const EmployeesPage = () => {
  const [users, setUsers] = useState<ConvertedEmployee[]>([]);
  const [genderFilter, setGenderFilter] = useState<Gender | undefined>();

  //Do Fetch in here
  const {
    data,
    loading: isLoading,
    error: isError,
  } = useFetchData({ endpoint: "api/user" });

  //change to useEffect
  //ConvertedEmployee[] ✅ - Trying to get an array of users not just one instance

  useEffect(() => {
    setUsers(
      data.map((userData) => {
        return {
          id: userData.id,
          fullName: userData.name,
          birthday: userData.birthDate,
          salary: userData.wage,
          gender: userData.sex,
        };
      })
    );
  }, [data]);

  const filterChangeHandler = (selectedGender: any) => {
    setGenderFilter(selectedGender);
  };

  const filteredUsers = filterUsers(users, {gender: genderFilter});  

  const addUserHandler = (user: ConvertedEmployee) => {
    setUsers((prevUsers: ConvertedEmployee[]) => {
      return [user, ...prevUsers];
    });
  };

  //###### Checks for any data available

  if (!isLoading && !data?.length) {
    return <div className="empty">There is no available data to fetch</div>;
  }

  return (
    <section className="container list__container">
      <NewUser onAddUser={addUserHandler} />

      <h2> Registered users </h2>

      {isLoading && <div className="loadingData"> Loading data... </div>}
      {isError && <div className="errorMessage">Could not fetch data</div>}

      {users.length > 0 && <UserFilter selected={genderFilter} onChangeFilter={filterChangeHandler}/>}

      <div>
        <section>
          <div className="categories">
            <h4>Name</h4>
            <h4>Birthday</h4>
            <h4>Hourly salary</h4>
            <h4>Gender</h4>
          </div>

          <DataList userData={filteredUsers}></DataList>
        </section>
      </div>
    </section>
  );
};

export default EmployeesPage;
