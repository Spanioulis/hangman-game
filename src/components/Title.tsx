import styled from 'styled-components';
import { colors, dimensions } from '../styles';

interface TitleProps {
   children?: string;
   color?: string;
   size?: string;
   weight?: string;
}
const TitleStyle = styled.p<TitleProps>`
   color: ${({ color }) => color || colors.font.base};
   font-size: ${({ size }) => size || dimensions.font.h1};
   font-weight: ${({ weight }) => weight || 'normal'};
`;

const Title: React.FC<TitleProps> = ({ children, color, size, weight }) => {
   return (
      <TitleStyle color={color} size={size} weight={weight}>
         {children}
      </TitleStyle>
   );
};

export default Title;
