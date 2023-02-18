import React, { useState } from 'react';

interface useRandomProps {
   // arr: string[];
   length: number;
}

const useRandom = (arr: string[]) => {
   // const [random, setRandom] = useState();

   let randomIndex = Math.floor(Math.random() * arr.length);
   return { randomIndex };
};

export default useRandom;
