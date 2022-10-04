import NewUser from "components/NewUsers/NewUser";
import DataList from "components/Users/DataList";
import useFetchData from "hooks/useFetchData";
import CardsList from "components/Users/CardsList";
import SearchFilter from "components/Filter/SearchFilter";
import { ConvertedEmployee, Employee, GenderFilterOption } from "ts/interfaces";
import { useEffect, useState } from "react";
import UserFilter from "components/Filter/UserFilter";
import { filterUsers } from "./helpers";
import "./EmployeesPage.css";

const EmployeesPage = () => {
  const [cards, setCards] = useState(false);
  const [users, setUsers] = useState<ConvertedEmployee[]>([]);
  const [filteredUser, setFilteredUser] = useState<Employee[]>([]);
  const [genderFilter, setGenderFilter] = useState<
    GenderFilterOption | undefined
  >();

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
          initials: userData.initials,
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

  useEffect(() => {
    const formatData = window.localStorage.getItem("cardFormatStorage");
    if (formatData !== null) setCards(JSON.parse(formatData));
    console.log({formatData});
    
  }, []);

/*   useEffect(() => {
    window.localStorage.setItem("cardFormatStorage", JSON.stringify(cards));
  }, [cards]); */

  const handleGender = (event: React.MouseEvent<HTMLButtonElement>) => {
    const gender = event.currentTarget as HTMLButtonElement;
    const value = gender.value;
  };

  const filterChangeHandler = (selectedGender: any) => {
    setGenderFilter(selectedGender);
  };

  const filteredUsers = filterUsers(users, {
    gender: genderFilter,
  });

  const addUserHandler = (user: ConvertedEmployee) => {
    setUsers((prevUsers: ConvertedEmployee[]) => {
      return [user, ...prevUsers];
    });
  };

  const toggleCards = () => {
    window.localStorage.setItem("cardFormatStorage", JSON.stringify(!cards));
    setCards(!cards);
  };

  //###### Checks for any data available
  if (!isLoading && !data?.length) {
    return <div className="empty">There is no available data to fetch</div>;
  }

  return (
    <section className="container list__container">
      <NewUser onAddUser={addUserHandler} />

      {isLoading && <div className="loadingData"> Loading data... </div>}
      {isError && <div className="errorMessage">Could not fetch data</div>}

      <div className="filterGrid__container">
        {users.length > 0 && (
          <UserFilter
            selectedOption={genderFilter}
            onChange={filterChangeHandler}
          />
        )}

        <div className="cardBtn">
          <button className="btn" onClick={toggleCards}>
            Show different format
          </button>
        </div>
      </div>

      <div>
        <section>
          {cards ? (
            <CardsList userData={filteredUsers} />
          ) : (
            <DataList userData={filteredUsers} />
          )}
        </section>
      </div>
    </section>
  );
};

export default EmployeesPage;
