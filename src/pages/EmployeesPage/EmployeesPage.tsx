import NewUser from "components/NewUsers/NewUser";
import DataList from "components/Users/DataList";
import useFetchData from "hooks/useFetchData";
import CardsList from "components/Users/CardsList";
import NewUserForm from "components/NewUsers/NewUserForm";
import { ConvertedEmployee, Employee, GenderFilterOption } from "ts/interfaces";
import { useEffect, useState } from "react";
import UserFilter from "components/Filter/UserFilter";
import { filterUsers } from "./helpers";
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

const EmployeesPage = () => {
  const [headline, setHeadline] = useState(false);
  const [cards, setCards] = useState(false);
  const [filteredUser, setFilteredUser] = useState<Employee[]>([]);
  const [genderFilter, setGenderFilter] = useState<
    GenderFilterOption | undefined
  >();
  const [modal, setModal] = useState(false);
  /* const [editModal, setEditModal] = useState(false); */
  const [order, setOrder] = useState("AscendingOrder");
  const [users, setUsers] = useState<ConvertedEmployee[]>([]);

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

  const toggleModal = () => {
    setModal(!modal);
  };

  /*   const toggleEditModal = () => {
    setEditModal(!editModal);
  }; */

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

  const sort = (columnName: keyof Omit<ConvertedEmployee, "id">) => {
    console.log(columnName);

    if (order === "AscendingOrder") {
      const sorted = [...users].sort((a, b) =>
        //@ts-ignore
        a[columnName].toLowerCase() > b[columnName].toLowerCase() ? 1 : -1
      );
      setUsers(sorted);
      setHeadline(!headline);
      setOrder("DescendingOrder");
    }

    if (order === "DescendingOrder") {
      const sorted = [...users].sort((a, b) =>
        //@ts-ignore
        a[columnName].toLowerCase() < b[columnName].toLowerCase() ? 1 : -1
      );
      setUsers(sorted);
      setHeadline(!headline);
      setOrder("AscendingOrder");
    }
  };

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
    <section>
      <TopContainer>
        <TopElements className="top-elements">
          <h2> Registered users </h2>
          <Button className="btn" onClick={toggleModal}>
            <div>Create user</div>
          </Button>
          {/*           <Button className="btn" onClick={toggleEditModal}>
            <div>Edit user</div>
          </Button> */}
        </TopElements>
      </TopContainer>

      {modal && <NewUserForm />}

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
                  isActiveHeadline={headline}
                  onClick={() => sort("fullName")}
                >
                  Name
                </Headline>
                <h4 onClick={() => sort("birthday")}>Birthday</h4>
                <h4 onClick={() => sort("salary")}>Hourly salary</h4>
                <h4 onClick={() => sort("gender")}>Gender</h4>
              </div>

              <DataList userData={filteredUsers} />
            </section>
          )}
        </section>
      </div>
    </section>
  );
};

export default EmployeesPage;
