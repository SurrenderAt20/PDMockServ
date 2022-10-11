import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  :root{
    font-family: "Roboto", sans-serif;
    --color-bg: #fff;
    --text-color: #000;
    --color-white: #fff; 
    --color-light: rgba(255, 255, 255, 0.6);
    --color-dark: #133337;
    --container-width-lg: 100%;
    
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-sizing: border-box;
  }

  container {
    width: var(--container-width-lg);
    margin: 0 auto;
  }


  h1,
  h2,
  h3,
  h4,
  h5 {
      font-weight: 500;
  }


  section {
    padding: 1.5rem;
  }
  
  section > h2,
  section > h5 {
      text-align: center;
      color: var(--color-dark);
  
  }
`;
 
export {GlobalStyle};