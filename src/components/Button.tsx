import styled from 'styled-components';
import { colors } from '../styles';

interface ButtonProps {
   children: string;
   value: string;
   onClick: (e: any) => void;
}

// type ButtonProps = {
//    value: string;
//    onClick: (e: any) => void;
// };

// type MyButtonProps = {
//    children: string;
// } & ButtonProps;

const ButtonStyle = styled.button<ButtonProps>`
   background-color: ${colors.button.background};
   border-radius: 10px;
   border: none;
   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
   color: ${colors.button.text};
   cursor: pointer;
   font-weight: bolder;
   padding: 10px 10px;
   text-align: center;
   text-decoration: none;
   transition: all 0.3s ease-in-out;
   width: 3rem;

   :hover {
      background-color: ${colors.main};
      box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
      color: ${colors.button.background};
      font-weight: bolder;
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
