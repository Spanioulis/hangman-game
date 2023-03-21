import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

type TText = {
   children: React.ReactNode;
   color?: string;
   margin?: string;
   size?: string;
   weight?: string;
};

const TextStyled = styled.p<TText>`
   color: ${({ color }) => color || colors.font.base};
   font-size: ${({ size }) => size || '16px'};
   font-weight: ${({ weight }) => weight || 'normal'};
   margin: ${({ margin }) => margin || '0rem'};
`;

const Text = ({ children, color, margin, size, weight }: TText) => {
   return (
      <TextStyled color={color} margin={margin} size={size} weight={weight}>
         {children}
      </TextStyled>
   );
};

export default Text;
