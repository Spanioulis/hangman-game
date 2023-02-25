import React, { useState, useEffect } from 'react';
import hangman from '../assets/hagman.png';

interface Props {
   number: number;
}

const HangmanImage = ({ number }: Props) => {
   const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      async function getImageUrl() {
         setIsLoading(true);
         try {
            let imageModule = await import(`../assets/${number}.png`);
            setImageUrl(imageModule.default);
         } catch (e) {
            console.error(e);
         } finally {
            setIsLoading(false);
         }
      }
      getImageUrl();
   }, [number]);

   if (isLoading) {
      return <p></p>;
   }

   return <img src={imageUrl} alt="Hangman image" width="125px" />;
};

export default HangmanImage;
