import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font-family: 'Arial', sans-serif; 
  }

  .FormContainer { 
    box-sizing: content-box; 
  }
`;



export default GlobalStyle;