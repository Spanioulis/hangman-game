import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonNext, HangmanImage, Text, Title } from './components';
import { useRandom } from './hooks';
import useFetch from './hooks/useFetch';
import { dimensions, FlexBox, GlobalStyle } from './styles';
import { letters } from './helpers';

const FlexBoxStyle = styled(FlexBox)`
   height: 100vh;
   margin: 0rem 18rem;

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

const URL = './db.json';

function App() {
   // TODO -> Crea 'spinner' para loading
   const { loading, error, data } = useFetch();
   const { randomIndex } = useRandom(data);

   const [word, setWord] = useState('');
   const [currentLetter, setCurrentLetter] = useState('');
   const [attempts, setAttempts] = useState(0);
   const [hiddenWord, setHiddenWord] = useState('');

   const handleClick = (e: any) => {
      setCurrentLetter(e.target.value);

      if (hiddenWord.includes('_')) {
         // TODO -> Aquí poner el sweeralert
         console.log('sigue la partida...');
      } else {
         setAttempts(0);
         handleNextWord();
      }
   };

   const handleNextWord = () => {
      setWord(data[randomIndex].value);
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
   }, [currentLetter]);

   useEffect(() => {
      setHiddenWord('_ '.repeat(word.length));
   }, [word]);

   return (
      <>
         <GlobalStyle />
         <FlexBoxStyle>
            <Title size={dimensions.font.h1}>Hangman Game</Title>
            <HangmanImage number={attempts} />
            <FlexBox direction="row" margin="1rem 0rem rem 0rem">
               {loading ? (
                  <p>cargando...</p>
               ) : (
                  <Text color="#121212" size={dimensions.font.h3} weight="bold">
                     {hiddenWord}
                  </Text>
               )}
            </FlexBox>

            <Text color="#121212" size={dimensions.font.h4} weight="semibold" margin="1rem 0rem 0rem 0rem">
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
