import { useEffect, useMemo, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button, ButtonNext, HangmanImage, Spinner, Text, Title } from './components';
import { useFetch, useRandom, useThemeMode } from './hooks';
import { letters } from './helpers';
import data from './constants/data.js';

import { dimensions, FlexBox, GlobalStyle } from './styles';
import Swal from 'sweetalert2';
import themes, { ThemeColors } from './styles/themes';

const FlexBoxStyle = styled(FlexBox)`
   margin-top: 3rem;
   height: 95vh;

   @media (max-width: 600px) {
      margin: 0rem 1rem;
   }
   @media (min-width: 600px) {
      margin: 0rem 3rem;
   }
   @media (min-width: 768px) {
      margin: 0rem 3rem;
   }
   @media (min-width: 992px) {
      margin: 0rem 10rem;
   }
   @media (min-width: 1200px) {
      margin: 0rem 22rem;
   }
`;

const TextStyle = styled(FlexBox)`
   height: 2rem;
`;

const url = './db.json';

function App() {
   const { isLoading } = useFetch(url);
   const { randomIndex } = useRandom(data);

   const [word, setWord] = useState('');
   const [currentLetter, setCurrentLetter] = useState('');
   const [attempts, setAttempts] = useState(0);
   const [hiddenWord, setHiddenWord] = useState('');

   const [theme, toggleTheme] = useThemeMode();
   const themeKey: keyof ThemeColors = theme as keyof ThemeColors;
   const themeMemo = useMemo(() => themes[themeKey], [themeKey]);

   const handleClick = (letter: string) => {
      setCurrentLetter(letter);

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
               title: '¡Enhorabuena, has ganado! 🎉',
               icon: 'success',
               showConfirmButton: false,
               timer: 3500
            });
         }
      }
   }, [hiddenWord]);

   return (
      <ThemeProvider theme={themeMemo}>
         <GlobalStyle />
         <FlexBoxStyle>
            <FlexBox direction="row" style={{ marginTop: '2rem' }}>
               <button onClick={() => toggleTheme('summer')}>Summer</button>
               <button onClick={() => toggleTheme('default')}>Spring</button>
               <button onClick={() => toggleTheme('autumn')}>Autumn</button>
               <button onClick={() => toggleTheme('winter')}>Winter</button>
            </FlexBox>
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
            <FlexBox direction="row" wrap="wrap" margin="1rem 0rem 0rem 0rem">
               {letters.map((letter) => {
                  return (
                     <Button value={letter} onClick={() => handleClick(letter)} key={letter}>
                        {letter}
                     </Button>
                  );
               })}
            </FlexBox>
            <ButtonNext onClick={handleNextWord} value="word">
               NUEVA PARTIDA
            </ButtonNext>
         </FlexBoxStyle>
      </ThemeProvider>
   );
}

export default App;
