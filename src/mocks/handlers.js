import { rest } from "msw";
import employeeData from "./employee-data";

const getEmployeeData = (req, res, ctx) => {
  return res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json({
      data: employeeData,
    })
  );
};

export const handlers = [
  rest.get("api/employees", getEmployeeData),
  rest.get("api/user", getEmployeeData)
];
