import React from 'react';
import { letters } from '../helpers';
import { FlexBox } from '../styles';
import Button from './Button';

interface ButtonGroupProps {
   setCurrentLetter: () => any;
   value: string;
}

const Buttongroup: React.FC<ButtonGroupProps> = ({ setCurrentLetter }) => {
   const handleClick = (value: string) => {
      setCurrentLetter(value);
   };

   return (
      <FlexBox direction="row">
         {letters.map((letter) => {
            return (
               <Button value={letter} onClick={() => handleClick(letter)} key={letter}>
                  {letter}
               </Button>
            );
         })}
      </FlexBox>
   );
};

export default Buttongroup;
