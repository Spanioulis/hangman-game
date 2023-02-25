import { useState, useEffect } from 'react';
// import hangman from '../assets/hagman.png';

interface Props {
   number: number;
   isLoading: boolean;
}

const HangmanImage = ({ number, isLoading }: Props) => {
   const [imageUrl, setImageUrl] = useState('');

   useEffect(() => {
      const getImageUrl = async () => {
         let imageModule = await import(`../assets/${number}.png`);
         setImageUrl(imageModule.default);
      };
      getImageUrl();
   }, [number]);

   if (isLoading) {
      return <p></p>;
   }

   return <img src={imageUrl} alt="Hangman image" width="125px" />;
};

export default HangmanImage;
