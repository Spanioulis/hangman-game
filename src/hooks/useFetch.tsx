import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
   const [data, setData] = useState([{ id: '', value: '' }]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setLoading(true);
      setError(null);

      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setData(data);
            setLoading(false);
         })
         .catch((error) => {
            setError(error);
            setLoading(false);
         });
   }, []);

   return { data, loading, error, isError: !!error, isSuccess: !!data };
};

export default useFetch;
