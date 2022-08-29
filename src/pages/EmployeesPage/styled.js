import styled, {keyframes} from 'styled-components';

export const StyledApp = styled.div`
  text-align: center;
`;

export const StyledAppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;


export const StyledApplink = styled.a`
  color: #61dafb;
`

export const StyledParagraph = styled.p``;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${appLogoSpin} infinite 20s linear;
`;
