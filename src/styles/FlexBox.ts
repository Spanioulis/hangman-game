import styled from 'styled-components';

interface FlexBoxProps {
   align?: string;
   justify?: string;
   direction?: string;
   gap?: string;
   grow?: number;
   margin?: string;
   wrap?: string;
   w?: string;
   onClick?: () => void;
}

const FlexBox = styled.div<FlexBoxProps>`
   display: flex;
   align-items: ${({ align }) => align || 'center'};
   flex-direction: ${({ direction }) => direction || 'column'};
   flex-grow: ${({ grow }) => grow || 0};
   flex-wrap: ${({ wrap }) => wrap || 'wrap'};
   margin: ${({ margin }) => margin || '0rem'};
   gap: ${({ gap }) => gap || '0.5rem'};
   justify-content: ${({ justify }) => justify || 'center'};
`;

export default FlexBox;
