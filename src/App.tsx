import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonNext, HangmanImage, Spinner, Text, Title } from './components';
import { useFetch, useRandom } from './hooks';
import { letters } from './helpers';

import { dimensions, FlexBox, GlobalStyle } from './styles';
import Swal from 'sweetalert2';

const FlexBoxStyle = styled(FlexBox)`
   height: 100vh;
   margin: 0rem 18rem;

   @media (max-width: 600px) {
      margin: 0rem 1rem;
   }
   @media (min-width: 600px) {
      margin: 0rem 2rem;
   }
   @media (min-width: 992px) {
      margin: 0rem 5rem;
   }
   @media (min-width: 1200px) {
      margin: 0rem 15rem;
   }
`;

const TextStyle = styled(FlexBox)`
   height: 2rem;
`;

const url = '../public/db.json';
function App() {
   const { isLoading, data } = useFetch(url);
   const { randomIndex } = useRandom(data);

   const [word, setWord] = useState('');
   const [currentLetter, setCurrentLetter] = useState('');
   const [attempts, setAttempts] = useState(0);
   const [hiddenWord, setHiddenWord] = useState('');

   const handleClick = (e: any) => {
      setCurrentLetter(e.target.value);

      if (!hiddenWord.includes('_')) {
         setAttempts(0);
         handleNextWord();
      }
   };

   const handleNextWord = () => {
      setWord(data[randomIndex].value);
      setCurrentLetter('');
      setAttempts(0);
   };

   useEffect(() => {
      if (!word.includes(currentLetter.toLowerCase())) {
         setAttempts(attempts + 1);
      }

      if (word && hiddenWord) {
         const hiddenwordArray = hiddenWord.split(' ');
         for (let i = 0; i < word.length; i++) {
            if (word[i].toLowerCase() === currentLetter.toLowerCase()) {
               hiddenwordArray[i] = currentLetter;
            }
         }
         setHiddenWord(hiddenwordArray.join(' '));
      }
   }, [currentLetter, hiddenWord]);

   useEffect(() => {
      if (attempts === 9) {
         Swal.fire({
            title: '¡Lo siento, no has ganado! 😥',
            icon: 'warning',
            showConfirmButton: false,
            timer: 2500
         });
         handleNextWord();
      }
   }, [attempts]);

   useEffect(() => {
      setHiddenWord('_ '.repeat(word.length));
   }, [word]);

   useEffect(() => {
      if (hiddenWord && hiddenWord.length > 0) {
         if (!hiddenWord.includes('_ ')) {
            Swal.fire({
               title: '!Enhorabuena, has ganado! 🎉',
               icon: 'success',
               showConfirmButton: false,
               timer: 3500
            });
         }
      }
   }, [hiddenWord]);

   return (
      <>
         <GlobalStyle />
         <FlexBoxStyle>
            <Title size={dimensions.font.h1}>Hangman Game</Title>
            <div style={{ height: '200px' }}>
               <HangmanImage number={attempts} isLoading={isLoading} />
            </div>

            <TextStyle direction="row" margin="1rem 0rem rem 0rem">
               {isLoading ? (
                  <Spinner />
               ) : (
                  <Text color="#121212" size={dimensions.font.h3} weight="bold">
                     {hiddenWord}
                  </Text>
               )}
            </TextStyle>

            <Text color="#121212" size={dimensions.font.h5} weight="semibold" margin="1rem 0rem 0rem 0rem">
               Intentos: {attempts}
            </Text>

            {/* TODO -> Usar el componente 'Buttongroup.tsx' */}

            <FlexBox direction="row" wrap="wrap" margin="1rem 0rem 0rem 0rem">
               {letters.map((letter) => {
                  return (
                     <Button value={letter} onClick={handleClick} key={letter}>
                        {letter}
                     </Button>
                  );
               })}
            </FlexBox>
            <ButtonNext onClick={handleNextWord} value="word">
               NUEVA PARTIDA
            </ButtonNext>
         </FlexBoxStyle>
      </>
   );
}

export default App;
