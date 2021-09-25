import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spartan';
    font-weight: 700;
  }

  body {
    background-color: ${(props) => props.theme.mainBgColor};
    font-size: 32px;
  }
`;
