import styled, { keyframes } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(35, 45, 57, 0.6);
  padding: 1rem;
  z-index: 110;

  & h4 {
    font-family: Lato;
    color: rgb(43, 55, 70);
    font-size: 1.5rem;
    line-height: 1.2rem;
    letter-spacing: 1px;
    font-weight: 700;
  }
`;

export const PopUpModalContainer = styled.div`
  background-color: rgb(240, 242, 245);
  border-radius: 0.5rem;
  box-shadow: rgb(13 80 110 / 4%) 0px 8px 16px, rgb(13 80 110 / 8%) 0px 4px 8px,
    rgb(13 80 110 / 16%) 0px 0px 1px;
  width: 75%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
