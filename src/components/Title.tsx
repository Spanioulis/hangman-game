import styled from 'styled-components';
import { colors, dimensions } from '../styles';

interface TitleProps {
   children?: string;
   color?: string;
   margin?: string;
   size?: string;
   weight?: string;
}
const TitleStyle = styled.p<TitleProps>`
   color: ${({ color }) => color || colors.font.logo};
   font-size: ${({ size }) => size || dimensions.font.h1};
   font-weight: ${({ weight }) => weight || 'normal'};
   margin: ${({ margin }) => margin || '0rem'};
`;

const Title: React.FC<TitleProps> = ({ children, color, size, weight, margin }) => {
   return (
      <TitleStyle color={color} margin={margin} size={size} weight={weight}>
         {children}
      </TitleStyle>
   );
};

export default Title;
