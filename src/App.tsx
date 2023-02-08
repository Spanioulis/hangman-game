import styled from 'styled-components';
import { Button, Text, Title } from './components';
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

function App() {
   const handleClick = (e: any) => {
      console.log(e.target.value);
   };
   return (
      <>
         <GlobalStyle />
         <FlexBoxStyle>
            <FlexBox>
               <Title>Hangman Game</Title>
               <img src="" alt="" />
            </FlexBox>
            <FlexBox direction="row">
               {letters.map((letter) => {
                  return (
                     <Button value={letter} onClick={handleClick}>
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
