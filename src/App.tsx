import styled from 'styled-components';
import { Text, Title } from './components';
import { dimensions, FlexBox, GlobalStyle } from './styles';
import { letters } from './utils';

const FlexBoxStyle = styled(FlexBox)`
   height: 100vh;
   margin: 0rem 15rem;

   /* @media (min-width: 992px) {
      margin: 0rem 5rem;
   }
   @media (min-width: 1200px) {
      margin: 0rem 15rem;
   } */
`;

function App() {
   return (
      <>
         <GlobalStyle />
         {console.log('letters', letters)}
         <FlexBoxStyle>
            <FlexBox>
               <Title>Hangman Game</Title>
               <img src="" alt="" />
            </FlexBox>
            <FlexBox direction="row">
               {letters.map((letter) => {
                  return <Text size={dimensions.font.h3}>{letter}</Text>;
               })}
            </FlexBox>
         </FlexBoxStyle>
      </>
   );
}

export default App;
