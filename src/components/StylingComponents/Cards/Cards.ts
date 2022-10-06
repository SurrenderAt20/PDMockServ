import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: grid;
  position: relative;
  gap: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media only screen and (max-width: 1300px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  }
`;

const fadeIn = keyframes`

    @keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
            transform: translateY(100%);
        }
        to {
            opacity:1;
        }
    }

`;

const CardsComponent = styled.div`
  display: flex;
  border: 1px solid #ccc;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 200px;
  border-radius: 10px;
  transition: box-shadow 0.3s;
  animation: ${fadeIn} 0.5s;
  -webkit-animation: fadein 0.5s;

    &:hover {
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }

`;

const CardsInitials = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 2rem;
    background-color: rgb(32, 41, 52);
`;

const CardsData = styled.h4`

`;



export { Container, CardsContainer, CardsComponent, CardsInitials };
