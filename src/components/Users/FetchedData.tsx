import React from 'react'
import useFetchData from "hooks/useFetchData";
import { ConvertedEmployee, Employee } from "ts/interfaces";

export default function FetchedData() {

    const {
        data,
        loading: isLoadingUsers,
        error: isUserError,
      } = useFetchData({ endpoint: "api/user" });
      
      const convertedUsers:ConvertedEmployee[] =
        data.map((userData) => {
          return {
            id: userData.id,
            fullName: userData.name,
            birthday: userData.birthDate,
            salary: userData.wage,
            gender: userData.sex
          };
        }) || [];

        if (!isLoadingUsers && !data?.length){
            return(
              <div className="empty">There is no available data to fetch</div>
              )
            }



  return (
    <div>FetchedData</div>
  )
}
