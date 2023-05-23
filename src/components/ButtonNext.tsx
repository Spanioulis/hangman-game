import styled from 'styled-components';
import { colors } from '../styles';

interface ButtonProps {
   children: string;
   value: string;
   onClick: () => void;
}

const ButtonStyle = styled.button<ButtonProps>`
   background-color: ${({ theme }) => theme.colors.nextButton};
   border-radius: 10px;
   border: none;
   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
   color: ${({ theme }) => theme.colors.text};
   cursor: pointer;
   font-weight: bolder;
   margin-top: 1rem;
   padding: 10px 10px;
   text-align: center;
   text-decoration: none;
   transition: all 0.3s ease-in-out;
   width: fit-content;

   :hover {
      background-color: ${({ theme }) => theme.colors.button};
      box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
      color: ${({ theme }) => theme.colors.nextButton};
      font-weight: bolder;
      transform: translateY(-2px);
   }
`;

const ButtonNext: React.FC<ButtonProps> = ({ children, value, onClick }) => {
   return (
      <ButtonStyle value={value} onClick={onClick}>
         {children}
      </ButtonStyle>
   );
};

export default ButtonNext;
