import NewUser from "components/NewUsers/NewUser";
import DataList from "components/Users/DataList";
import useFetchData from "hooks/useFetchData";
import { ConvertedEmployee, Employee } from "ts/interfaces";
import { useEffect, useState } from "react";

const EmployeesPage = () => {
  const [users, setUsers] = useState<ConvertedEmployee[]>([]);
  const [filteredUser, setFilteredUser] = useState<Employee[]>([]);

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

  useEffect(() => {
    setFilteredUser(data);
  }, []);

  const handleGender = (event: React.MouseEvent<HTMLButtonElement>) => {
    const gender = event.currentTarget as HTMLButtonElement;
    const value = gender.value;

    gender !== "";
  };

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

  //put in userState

  const addUserHandler = (user: ConvertedEmployee) => {
    setUsers((prevUsers: ConvertedEmployee[]) => {
      return [user, ...prevUsers];
    });
  };

  if (!isLoading && !data?.length) {
    return <div className="empty">There is no available data to fetch</div>;
  }

  return (
    <section className="container list__container">
      <NewUser onAddUser={addUserHandler} />

      <h2> Registered users </h2>

      {isLoading && <div className="loadingData"> Loading data... </div>}
      {isError && <div className="errorMessage">Could not fetch data</div>}

      {convertedUsers.length > 0 && <div>Filter</div>}

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
