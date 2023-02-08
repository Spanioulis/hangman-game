import styled from 'styled-components';

interface FlexBoxProps {
   align?: string;
   justify?: string;
   direction?: string;
   grow?: string;
   wrap?: string;
   w?: string;
   onClick?: () => void;
}

const FlexBox = styled.div<FlexBoxProps>`
   display: flex;
   align-items: ${({ align }) => align || 'center'};
   justify-content: ${({ justify }) => justify || 'center'};
   flex-direction: ${({ direction }) => direction || 'column'};
   /* flex-grow: ${({ grow }) => grow || 0};
   flex-wrap: ${({ wrap }) => wrap || 'wrap'}; */
`;

export default FlexBox;
