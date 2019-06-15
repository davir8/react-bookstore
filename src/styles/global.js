import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    font-family: sans-serif;
    background-color: #ffe207;
  }
  body > #root {
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
