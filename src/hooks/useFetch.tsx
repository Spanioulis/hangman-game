import { useEffect, useState } from 'react';

const useFetch = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setLoading(true);
      setError(null);

      fetch('../public/db.json')
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
