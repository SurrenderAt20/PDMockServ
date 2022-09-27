export interface Employee {
    id: number,
    name: string,
    initials: string,
    birthDate: string;
    wage: number;
    sex: Gender;
}

export type Gender = "male" | "female";

export type GenderFilterOption = Gender & 'all';

export interface EmployeeFilter {
    gender?: GenderFilterOption;
    name?: string;
}

export interface ConvertedEmployee  {
    id?: number;
    fullName: string;
    initials: string,
    birthday: string;
    salary: number;
    gender?: Gender;
}

export interface UseFetchDataParams {
    endpoint: string;
}