import styled from 'styled-components';
import { Text, Title } from './components';
import { FlexBox, GlobalStyle } from './styles';

const FlexBoxStyle = styled(FlexBox)`
   height: 100vh;
   width: 100vw;
`;

function App() {
   return (
      <>
         <GlobalStyle />
         <FlexBoxStyle>
            <Title>Hang Man 😥</Title>
            <Text>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad fuga quasi voluptatum exercitationem
               hic odio possimus, obcaecati excepturi id similique provident cumque corporis pariatur porro minus natus
               sequi sed rem illo. Minima temporibus possimus cumque voluptate reprehenderit rerum nobis?
            </Text>
         </FlexBoxStyle>
      </>
   );
}

export default App;
