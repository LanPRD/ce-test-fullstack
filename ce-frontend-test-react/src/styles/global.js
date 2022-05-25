import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 10px;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: linear-gradient(to left, #8e9eab, #eef2f3) no-repeat 100%;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
