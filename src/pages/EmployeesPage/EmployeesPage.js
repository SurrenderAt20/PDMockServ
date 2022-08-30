import DataList from "components/DataList";
import useFetchData from "hooks/useFetchData";
import { useState } from "react";
import {API_URL_PATH} from "../../ts/constants";


const EmployeesPage = () => {
  return (
    <div>
      <DataList/>
    </div>

  );
};

export default EmployeesPage;
