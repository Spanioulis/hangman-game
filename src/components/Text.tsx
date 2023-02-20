import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

interface TextProps {
   children?: any;
   color?: string;
   margin?: string;
   size?: string;
   weight?: string;
}
const TextStyle = styled.p<TextProps>`
   color: ${({ color }) => color || colors.font.base};
   font-size: ${({ size }) => size || '16px'};
   font-weight: ${({ weight }) => weight || 'normal'};
   margin: ${({ margin }) => margin || '0rem'};
`;

const Text: React.FC<TextProps> = ({ children, color, size, weight, margin }) => {
   return (
      <TextStyle color={color} size={size} weight={weight} margin={margin}>
         {children}
      </TextStyle>
   );
};

export default Text;
