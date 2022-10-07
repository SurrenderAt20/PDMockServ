import NewUser from "components/NewUsers/NewUser";
import DataList from "components/Users/DataList";
import useFetchData from "hooks/useFetchData";
import CardsList from "components/Users/CardsList";
import { ConvertedEmployee, Employee, GenderFilterOption } from "ts/interfaces";
import { useEffect, useState } from "react";
import UserFilter from "components/Filter/UserFilter";
import { filterUsers } from "./helpers";
import {
  FilterGrid,
  GridIconOne,
  GridIconTwo,
  IconContainer,
} from "components/StylingComponents/EmployeesPage/EmployeesPage";

const EmployeesPage = () => {
  const [cards, setCards] = useState(false);
  const [users, setUsers] = useState<ConvertedEmployee[]>([]);
  const [filteredUser, setFilteredUser] = useState<Employee[]>([]);
  const [genderFilter, setGenderFilter] = useState<
    GenderFilterOption | undefined
  >();

  const {
    data,
    loading: isLoading,
    error: isError,
  } = useFetchData({ endpoint: "api/user" });

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

  useEffect(() => {
    const formatData = window.localStorage.getItem("cardFormatStorage");
    if (formatData !== null) setCards(JSON.parse(formatData));
    console.log({ formatData });
  }, []);

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

/*   const toggleList = () => {
    window.localStorage.setItem("ListFormatStorage", JSON.stringify(false));
    setCards(false);
  } */


  const sorted = users.slice().sort(function(firstUser, secondUser) { 
    if(firstUser.birthday < secondUser.birthday) return 1;
    if(firstUser.birthday > secondUser.birthday) return -1;
    return 0;
   });



  //###### Checks for any data available
  if (!isLoading && !data?.length) {
    return <div className="empty">There is no available data to fetch</div>;
  }

  return (
    <section>
      <NewUser onAddUser={addUserHandler} />

      {isLoading && <div className="loadingData"> Loading data... </div>}
      {isError && <div className="errorMessage">Could not fetch data</div>}

      <FilterGrid>
        {users.length > 0 && (
          <UserFilter
            selectedOption={genderFilter}
            onChange={filterChangeHandler}
          />
        )}

        <IconContainer>
          <GridIconOne
            size={25}
            onClick={toggleCards}
          ></GridIconOne>
          <GridIconTwo
            size={28}
            onClick={toggleCards}
          ></GridIconTwo>
        </IconContainer>
      </FilterGrid>

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
