import { useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonNext, Text, Title } from './components';
import { useRandom } from './hooks';
import useFetch from './hooks/useFetch';
import { dimensions, FlexBox, GlobalStyle } from './styles';
import { letters } from './utils';

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
   const [emptyWord, setEmptyWord] = useState('');
   const arrayWord = word.value.split('');
   const underscore = '__ ';

   const handleClick = (e: any) => {
      console.log(e.target.value);
   };

   const handleNextWord = () => {
      // console.log('Próxima partida', data[randomIndex].value.length);
      setWord({ ...word, value: data[randomIndex].value });
   };

   return (
      <>
         <GlobalStyle />
         <FlexBoxStyle>
            <FlexBox>
               <Title size={dimensions.font.h1}>Hangman Game</Title>
               <img src="" alt="" />
            </FlexBox>
            {loading ? (
               <p>cargando...</p>
            ) : (
               <Text color="#121212" size={dimensions.font.h2} weight="bold">
                  {word.value}
               </Text>
            )}
            <FlexBox direction="row" margin="1rem 0rem 2rem 0rem">
               {arrayWord.map((arr) => {
                  return <span>{underscore}</span>;
               })}
            </FlexBox>

            <FlexBox direction="row">
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
