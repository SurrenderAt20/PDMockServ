import {ConvertedEmployee, EmployeeFilter, Order, SortColumn} from "ts/interfaces";

export function filterUsers(users: ConvertedEmployee[], filters: EmployeeFilter) {
  let filteredUsers = [...users];

  if (filters.gender && filters.gender !== 'all') {
    filteredUsers = filteredUsers.filter((user) => user.gender === filters.gender);
  }

  if(filters.name){
    filteredUsers = filteredUsers.filter((user) => user.fullName.toLowerCase().includes(filters.name!))
  }

  return filteredUsers;
}

export function sortUsers (columnName: SortColumn, users: ConvertedEmployee[], order: Order) {

    return users.sort((a, b) => {

    if(typeof a[columnName] === "string"){

      if(order === "AscendingOrder"){
        return (a[columnName]! as string).toLowerCase() > (b[columnName]! as string).toLowerCase() ? 1 : -1
      } else {
        return (a[columnName]! as string).toLowerCase() < (b[columnName]! as string).toLowerCase() ? 1 : -1
      }

    } else {

      if(order === "AscendingOrder"){
        return a[columnName]! > b[columnName]! ? 1 : -1
      } else {
        return a[columnName]! < b[columnName]! ? 1 : -1
      }

    } 


  })

 /*  const sortUser = (columnName: SortColumn) => {
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

    setSortColumn(columnName);
  }; */
}