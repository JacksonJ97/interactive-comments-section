import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
