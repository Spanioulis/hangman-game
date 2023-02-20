import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonNext, HangmanImage, Text, Title } from './components';
import { useRandom } from './hooks';
import useFetch from './hooks/useFetch';
import { dimensions, FlexBox, GlobalStyle } from './styles';
import { letters } from './helpers';

interface MyState {
   value: string;
}

const FlexBoxStyle = styled(FlexBox)`
   height: 100vh;
   margin: 0rem 18rem;

   /* @media (min-width: 992px) {
      margin: 0rem 5rem;
   }
   @media (min-width: 1200px) {
      margin: 0rem 15rem;
   } */
`;

const URL = './db.json';

function App() {
   // TODO -> Crea 'spinner' para loading
   const { loading, error, data } = useFetch();
   const { randomIndex } = useRandom(data);
   const [word, setWord] = useState<MyState>({ value: '' });
   const [currentLetter, setCurrentLetter] = useState('');
   const [attempts, setAttempts] = useState(0);
   console.log('currentLetter:', currentLetter);
   const [newWord, setNewWord] = useState([]);
   const arrayWord = word.value.split('');
   console.log('arrayWord:', arrayWord);
   const underscore = '__ ';

   const handleClick = (e: any) => {
      setCurrentLetter(e.target.value);
   };

   const handleNextWord = () => {
      // console.log('Próxima partida', data[randomIndex].value.length);
      setWord({ ...word, value: data[randomIndex].value });
      setAttempts(0);
   };

   useEffect(() => {
      setAttempts(attempts + 1);
   }, [currentLetter]);

   return (
      <>
         <GlobalStyle />
         <FlexBoxStyle>
            <Title size={dimensions.font.h1}>Hangman Game</Title>
            <HangmanImage number={attempts} />
            {loading ? (
               <p>cargando...</p>
            ) : (
               <Text color="#121212" size={dimensions.font.h2} weight="bold">
                  {word.value}
               </Text>
            )}

            <FlexBox direction="row" margin="1rem 0rem rem 0rem">
               {/* TODO -> 'uuid4' */}
               {arrayWord.map((arr, index) => {
                  if (arr.toLowerCase() === currentLetter.toLowerCase()) {
                     return <Text key={index}>{arr.toUpperCase()}</Text>;
                  } else {
                     return (
                        <Text key={index} color="#121212">
                           {underscore}
                        </Text>
                     );
                  }
               })}
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
