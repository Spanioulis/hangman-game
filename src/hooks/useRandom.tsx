import React, { useState } from 'react';

interface Props {
   length: number;
}

const useRandom = (arr: any) => {
   // const [random, setRandom] = useState();

   let randomIndex = Math.floor(Math.random() * arr.length);
   return { randomIndex };
};

export default useRandom;
