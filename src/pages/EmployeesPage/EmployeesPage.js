import NewUser from "components/NewUsers/NewUser";
import DataList from "components/Users/DataList";
import useFetchData from "hooks/useFetchData";
import { useState } from "react";
import { employeeData } from "../../mocks/employee-data";

const EmployeesPage = () => {
  const [user, setUsers] = useState(employeeData);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [{ user, ...prevUsers }];
    });
    console.log(employeeData);
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <DataList value={user} />
    </div>
  );
};

export default EmployeesPage;
