export interface Employee {
    id: number,
    name: string,
    birthDate: string;
    wage: number;
    sex: Gender;
}

export type Gender = "male" | "female";

export interface EmployeeFilter {
    gender?: Gender;
}

export interface ConvertedEmployee  {
    id?: number;
    fullName: string;
    birthday: string;
    salary: number;
    gender: Gender;
}

export interface UseFetchDataParams {
    endpoint: string;
  }