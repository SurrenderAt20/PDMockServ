import "./DataList.css";
import useFetchData from "hooks/useFetchData";

export function DataList() {

  const {
    data,
    loading: isLoadingUsers,
    error: isUserError,
  } = useFetchData({ endpoint: "api/user" });
  
  const convertedUsers =
    data.map((userData) => {

      return {
        id: userData.id,
        fullName: userData.name,
        birthday: userData.birthDate,
        salary: userData.wage,
      };
    }) || [];

  return (
    <section className="container list__container">
      <h2> Registered users </h2>

      <div>

          <div className="headline">
            <h4>Name</h4>
            <h4>Birthday</h4>
            <h4>Hourly salary</h4>
          </div>

        {convertedUsers?.map((user) => (
          <div key={user.id} className="list__item">
            <h4>{user.fullName}</h4>
            <h4>{user.birthday}</h4>
            <h4>{user.salary}</h4>
            {/* <h4>{user.location}</h4> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default DataList;
