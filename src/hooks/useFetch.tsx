import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
   const [data, setData] = useState([{ id: '', value: '' }]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setIsLoading(true);
      setError(null);

      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setData(data);
            setIsLoading(false);
         })
         .catch((error) => {
            setError(error);
            setIsLoading(false);
         });
   }, []);

   return { data, isLoading, error };
};

export default useFetch;
