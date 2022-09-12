import NewUser from "components/NewUsers/NewUser";
import DataList from "components/Users/DataList";
import Navigation from "components/Routing/Routing";

const EmployeesPage = () => {

  //Do Fetch in here
  //put in userState

  const addUserHandler = (user) => {
    console.log("in DataList.tsx");
    console.log(user);
  };

  return (
    <div>
      <Navigation />
      <NewUser onAddUser={addUserHandler} />
      <DataList />
    </div>
  );
};

export default EmployeesPage;
