import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #191a30;
    --color-secondary: #4f2ed0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .is-danger {
      color: red;
      font-size: 14px;
      margin-top: 10px;
  }

  .btn-accept {
    width: 100px;
    background-color: green;
    border: none;
    color: #fff;
    height: 40px;
    border-radius: 5px;
    transition: 0.4s;

    &:hover {
        transform: scale(1.1);
    }
  }
`;
