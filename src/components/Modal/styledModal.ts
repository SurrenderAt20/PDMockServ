import styled, { keyframes } from "styled-components";


export const Container = styled.section`

    @import url("@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');")

    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    background: rgba(35, 45, 57, 0.6);
    padding: 1rem;
    z-index: 110;

    & h4 {
        font-family: Lato;
        font-weight: 700;
        font-size: 20px;
        letter-spacing: 1px;
    }
`;

export const ContentContainer = styled.section`
    background-color: rgb(240, 242, 245);
    border-radius: 0.5rem;
    box-shadow: rgb(13 80 110 / 4%) 0px 8px 16px, rgb(13 80 110 / 8%) 0px 4px 8px, rgb(13 80 110 / 16%) 0px 0px 1px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const ContentHeader = styled.section`
    background-color: white;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    display: flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 1rem;
    transition: box-shadow 0.3s ease 0s;
    flex-shrink: 0;
    z-index: 1;
    border-bottom: 1px solid rgb(233, 238, 241);

`;