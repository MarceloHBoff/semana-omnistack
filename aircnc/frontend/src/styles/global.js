import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.jpg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #000 url(${background}) no-repeat;
    overflow-y: hidden;
    -webkit-font-smoothing: antialiased;
    background-size: cover;
  }

  body, input, textarea, button {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
