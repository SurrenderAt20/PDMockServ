export interface Employee {
    id: number,
    name: string,
    birthDate: string,
    wage: number,
    department: [{
        name: string,
        id: number
    }]
}

export interface UseFetchDataParams {
    endpoint: string;
  }