import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

interface TextProps {
   children?: string;
   color?: string;
   size?: string;
   weight?: string;
}
const TextStyle = styled.p<TextProps>`
   color: ${({ color }) => color || colors.font.base};
   font-size: ${({ size }) => size || '16px'};
   font-weight: ${({ weight }) => weight || 'normal'};
`;

const Text: React.FC<TextProps> = ({ children, color, size, weight }) => {
   return (
      <TextStyle color={color} size={size} weight={weight}>
         {children}
      </TextStyle>
   );
};

export default Text;
