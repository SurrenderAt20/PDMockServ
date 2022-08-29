import { Employee } from './../ts/interfaces/index';
import { useEffect, useState } from "react";

interface UseFetchDataParams {
  endpoint: string;
}

const useFetchData = ({
  endpoint,
}: UseFetchDataParams): {
  loading: boolean;
  data: Employee[];
  error: Error | undefined;
  fetchData: () => void
} =>

{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const fetchData = () => {
    setLoading(true);

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { loading, fetchData, data, error };
};

export default useFetchData;
