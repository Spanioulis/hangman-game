import styled from 'styled-components';
import { colors } from '../styles';

type TButton = {
   children: React.ReactNode;
   value: string;
   onClick: () => void;
};

const ButtonStyle = styled.button<TButton>`
   background-color: ${({ theme }) => theme.colors.button};
   border-radius: 10px;
   border: none;
   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
   color: ${({ theme }) => theme.colors.text};
   cursor: pointer;
   font-weight: bolder;
   padding: 10px 10px;
   text-align: center;
   text-decoration: none;
   transition: all 0.3s ease-in-out;
   width: 3rem;

   :hover {
      background-color: ${({ theme }) => theme.colors.nextButton};
      box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
      color: ${({ theme }) => theme.colors.text};
      font-weight: bolder;
      transform: translateY(-2px);
   }
`;

const Button = ({ children, value, onClick }: TButton) => {
   return (
      <ButtonStyle value={value} onClick={onClick}>
         {children}
      </ButtonStyle>
   );
};

export default Button;
