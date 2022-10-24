import DataList from "components/Users/DataList";
import useFetchData from "hooks/useFetchData";
import CardsList from "components/Users/CardsList";
import {
  ConvertedEmployee,
  Employee,
  GenderFilterOption,
  Order,
  SortColumn,
} from "ts/interfaces";
import { useEffect, useState } from "react";
import UserFilter from "components/Filter/UserFilter";
import { filterUsers, sortUsers } from "./helpers";
import {
  FilterGrid,
  GridIconOne,
  GridIconTwo,
  Headline,
  IconContainer,
} from "components/StylingComponents/EmployeesPage/EmployeesPage";
import {
  TopContainer,
  TopElements,
  Button,
} from "components/StylingComponents/Form/Form";
import NewUserForm from "components/NewUsers/NewUserForm";

const EmployeesPage = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [cards, setCards] = useState(false);
  const [filteredUser, setFilteredUser] = useState<Employee[]>([]);
  const [genderFilter, setGenderFilter] = useState<
    GenderFilterOption | undefined
  >();
  const [order, setOrder] = useState<Order>("AscendingOrder");
  const [users, setUsers] = useState<ConvertedEmployee[]>([]);
  const [selectedUser, setSelectedUser] = useState<ConvertedEmployee>();
  const [sortColumn, setSortColumn] = useState<SortColumn>("fullName");

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

  const sortUser = (columnName: SortColumn) => {
    const sorted = sortUsers(columnName, users, order);
    setUsers(sorted);
    setOrder(
      order === "DescendingOrder" ? "AscendingOrder" : "DescendingOrder"
    );
    setSortColumn(columnName);
    console.log(columnName);
  };

  const saveHandler = (user: ConvertedEmployee) => {
    setUsers((prevUsers: ConvertedEmployee[]) => {
      let usersParam = [user, ...prevUsers];
      if (selectedUser) {
        const filteredUsers = prevUsers.filter(
          (prevUser) => prevUser.id !== user.id
        );
        usersParam = [user, ...filteredUsers];
      }

      const sorted = sortUsers(sortColumn, usersParam, order);
      return sorted;
    });
    setSelectedUser(undefined);
  };

  const toggleCards = () => {
    window.localStorage.setItem("cardFormatStorage", JSON.stringify(!cards));
    setCards(!cards);
  };

  //###### Checks for any data available
  if (!isLoading && !data?.length) {
    return <div className="empty">There is no available data to fetch</div>;
  }

  const handleEditClick = (user: ConvertedEmployee) => {
    setSelectedUser(user);
    setShowFormModal(true);
  };

  return (
    <section>
      <TopContainer>
        <TopElements className="top-elements">
          <h2> Registered users </h2>
          <Button className="btn" onClick={() => setShowFormModal(true)}>
            <div>Create user</div>
          </Button>
        </TopElements>
      </TopContainer>

      {showFormModal && (
        <NewUserForm
          onClose={() => setShowFormModal(false)}
          onSave={saveHandler}
          editUser={selectedUser}
        />
      )}

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
            isActive={cards}
            size={25}
            onClick={toggleCards}
          ></GridIconOne>
          <GridIconTwo
            isActive={!cards}
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
            <section>
              <div className="categories">
                <Headline
                  isActiveHeadline={sortColumn === "fullName"}
                  onClick={() => sortUser("fullName")}
                >
                  Name
                </Headline>
                <Headline
                  isActiveHeadline={sortColumn === "birthday"}
                  onClick={() => sortUser("birthday")}
                >
                  Birthday
                </Headline>
                <Headline
                  isActiveHeadline={sortColumn === "salary"}
                  onClick={() => sortUser("salary")}
                >
                  Hourly salary
                </Headline>
                <Headline
                  isActiveHeadline={sortColumn === "gender"}
                  onClick={() => sortUser("gender")}
                >
                  Gender
                </Headline>
              </div>

              <DataList
                onEditClick={handleEditClick}
                userData={filteredUsers}
              />
            </section>
          )}
        </section>
      </div>
    </section>
  );
};

export default EmployeesPage;
