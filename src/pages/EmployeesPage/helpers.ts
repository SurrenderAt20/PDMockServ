import {ConvertedEmployee, EmployeeFilter} from "ts/interfaces";

export function filterUsers(users: ConvertedEmployee[], filters: EmployeeFilter) {
  let filteredUsers = [...users];

  if (filters.gender && filters.gender !== 'all') {
    filteredUsers = filteredUsers.filter((user) => user.gender === filters.gender);
  }

  return filteredUsers;
}