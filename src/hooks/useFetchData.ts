import { Employee, UseFetchDataParams} from './../ts/interfaces/index';
import { useEffect, useState } from "react";

const useFetchData = ({
  endpoint,
}: UseFetchDataParams): {
  loading: boolean;
  data: Employee[];
  error: Error | undefined;
} => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
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
  }, [endpoint]);
  
  return { loading, data, error };
};

export default useFetchData;
