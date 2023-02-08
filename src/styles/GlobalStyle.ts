import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.background};
    /* TODO - Cambiar fuente */
    /* font-family: 'Roboto', sans-serif; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `;
export default GlobalStyle;
