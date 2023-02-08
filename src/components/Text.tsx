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

const Text: React.FC<TextProps> = ({ children }) => {
   return <TextStyle>{children}</TextStyle>;
};

export default Text;
