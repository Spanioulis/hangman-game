import styled from 'styled-components';
import { Button, Text, Title } from './components';
import useFetch from './hooks/useFetch';
import { dimensions, FlexBox, GlobalStyle } from './styles';
import { letters } from './utils';

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
   const handleClick = (e: any) => {
      console.log(e.target.value);
   };

   // TODO -> Crea 'spinner' para loading
   const { loading, error, data } = useFetch();

   if (data && data.length > 0) {
      console.log('data', data[425]);
   }

   return (
      <>
         <GlobalStyle />
         <FlexBoxStyle>
            <FlexBox>
               <Title size={dimensions.font.h1}>Hangman Game</Title>
               <img src="" alt="" />
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
         </FlexBoxStyle>
      </>
   );
}

export default App;
