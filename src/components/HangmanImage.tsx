import React from 'react';

interface Props {
   number: number;
}

const HangmanImage = ({ number }: Props) => {
   if (number < 10) {
      return <img src={import.meta.resolve(`../assets/${number}.png`)} alt="Hangman image" width="125px" />;
   }
   // TODO -> Cambar esto por un POPUP de sweetalert, por ejemplo
   return <img src={import.meta.resolve(`../assets/9.png`)} alt="Hangman image" width="125px" />;
};

export default HangmanImage;
