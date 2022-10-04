import styled from "styled-components";


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


export {Container, CardsContainer}