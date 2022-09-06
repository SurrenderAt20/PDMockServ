export interface Employee {
    id: number,
    name: string,
    birthDate: string;
    wage: number;
    sex: Gender;
}

type Gender = "male" | "female";

export interface ConvertedEmployee  {
    id: number;
    fullName: string;
    birthday: string;
    salary: number;
    gender: Gender;
}

export interface UseFetchDataParams {
    endpoint: string;
  }