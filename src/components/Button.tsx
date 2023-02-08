import styled from 'styled-components';
import { colors } from '../styles';

interface ButtonProps {
   children: string;
   value: string;
   onClick: (e: any) => void;
}

const ButtonStyle = styled.button<ButtonProps>`
   background-color: ${colors.button.background};
   color: ${colors.button.text};
   padding: 10px 10px;
   border-radius: 10px;
   border: none;
   text-align: center;
   text-decoration: none;
   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
   transition: all 0.3s ease-in-out;
   width: 3rem;
   cursor: pointer;

   :hover {
      background-color: ${colors.secondary};
      box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
   }
`;

const Button: React.FC<ButtonProps> = ({ children, value, onClick }) => {
   return (
      <ButtonStyle value={value} onClick={onClick}>
         {children}
      </ButtonStyle>
   );
};

export default Button;
