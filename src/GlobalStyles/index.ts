import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

// 전역 스타일 적용

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-style: normal;
    font-weight: 300;
    src: url("/fonts/SpoqaHanSansNeo-Regular.otf") format("woff")
  }

  body,
  html {
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    cursor: default;
    font-weight: 600;
  }

  body {
    width: 100%;
    min-height: 100vh;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  input, textarea { 
    -webkit-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  strong {
    font-weight: bold;
    color: black;
  }
`;

export default GlobalStyle;
