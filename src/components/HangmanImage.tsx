import { useState, useEffect } from 'react';

type THangmanImage = {
   number: number;
   isLoading: boolean;
};

const HangmanImage = ({ number, isLoading }: THangmanImage) => {
   const [imageUrl, setImageUrl] = useState('');

   useEffect(() => {
      const getImageUrl = async () => {
         try {
            const imageModule = await import(`../assets/${number}.png`);
            setImageUrl(imageModule.default);
         } catch (error) {
            console.log(error);
         }
      };
      getImageUrl().catch((error) => console.log(error));
   }, [number]);

   if (isLoading) {
      return <p>Is loading...</p>;
   }

   return <img src={imageUrl} alt="Hangman image" width="125px" />;
};

export default HangmanImage;
