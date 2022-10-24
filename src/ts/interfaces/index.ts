export interface Employee {
    id: number,
    name: string,
    initials: string,
    birthDate: string;
    wage: number;
    sex: Gender;
}

export type Order = "AscendingOrder" | "DescendingOrder"

export type SortColumn = keyof Omit<ConvertedEmployee, "id">

export type Name = string;

export type Gender = "male" | "female";

export type GenderFilterOption = Gender & 'all';

export interface EmployeeFilter {
    gender?: GenderFilterOption;
    name?: string;
}

export interface ConvertedEmployee  {
    id: number;
    fullName: Name;
    birthday: string;
    salary: number;
    gender?: Gender;
}

export interface UseFetchDataParams {
    endpoint: string;
}