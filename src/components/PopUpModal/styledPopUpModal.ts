import styled, { keyframes } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  display: flex;
  justify-content: center;
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

export const ContentHeader = styled.div`
  background-color: white;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: flex;
  -webkit-box-align: stretch;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 1.5rem;
  transition: box-shadow 0.3s ease 0s;
  flex-shrink: 0;
  z-index: 1;
  border-bottom: 1px solid rgb(233, 238, 241);
`;


export const FormContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 1rem;
  overflow: auto;
  display: block;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

export const Form = styled.div`
  padding: 1rem 0px;
  margin: 0px auto;
  max-width: 55rem;
`;

export const Group = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: rgb(13 80 110 / 64%) 0px 0px 0.0625rem,
    rgb(13 80 110 / 8%) 0px 0.25rem 0.5rem, rgb(13 80 110 / 4%) 0px 0.5rem 1rem;

  ::after {
    box-sizing: inherit;
  }
`;

export const PopUpModalContainer = styled.div`
  background-color: rgb(240, 242, 245);
  border-radius: 0.5rem;
  box-shadow: rgb(13 80 110 / 4%) 0px 8px 16px, rgb(13 80 110 / 8%) 0px 4px 8px,
    rgb(13 80 110 / 16%) 0px 0px 1px;
  width: 85%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledCloseIcon = styled(AiOutlineClose)`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 0px 0px 0px 1.5rem;
  cursor: pointer;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;
