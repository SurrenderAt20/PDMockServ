import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  @import url("@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');")
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

export const ModalContainer = styled.div`
  background-color: rgb(240, 242, 245);
  border-radius: 0.5rem;
  box-shadow: rgb(13 80 110 / 4%) 0px 8px 16px, rgb(13 80 110 / 8%) 0px 4px 8px,
    rgb(13 80 110 / 16%) 0px 0px 1px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  background-color: white;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 2rem;
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
  max-width: 44rem;
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

export const StyledGroupHeading = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  position: relative;
  min-height: auto;
`;

export const TopSpecs = styled.div`
  margin-top: -0.85rem;
  display: flex;
`;

export const StyledFieldsContainer = styled.div`
  margin-bottom: 0px;
  margin-right: 4rem;
  display: block;
`;

export const NameFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -1rem;
`;

export const NameFieldOne = styled.div`
  flex: 0 0 calc(50% - 1rem);
  margin-right: 1rem;
`;

export const NameFieldTwo = styled.div`
  flex: 0 0 calc(50% - 1rem);
  margin-right: 1rem;
`;

export const NameFieldOneSpecs = styled.div`
  position: relative;
  margin-bottom: 0.75rem;
  min-height: 2rem;
`;

export const Label = styled.label`
  display: block;

  > span {
    float: left;
    display: block;
    margin: 0px 0.25rem 0px 0px;
    min-height: initial;
    max-width: calc(100% - 1.25rem);
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.0125rem;
    line-height: 1.25rem;
    color: rgb(43, 55, 70);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const NameFieldInputWrapper = styled.div`
  position: relative;
`;

export const NameFieldInput = styled.input`
  background: rgb(255, 255, 255);
  width: 100%;
  height: 2rem;
  border-radius: 0.25rem;
  border: 1px solid rgb(205, 213, 223);
  padding-left: 0.6rem;
  color: rgb(43, 55, 70);
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  letter-spacing: 0.0125rem;
`;


export const EmailFieldsContainer = styled.div`
  position: relative;
  margin-bottom: 0.75rem;
  min-height: 2rem;
`;

export const EmailFieldInputWrapper = styled.div`
  position: relative;
`;

export const EmailFieldInput = styled.input`
  background: rgb(255, 255, 255);
  width: 100%;
  height: 2rem;
  border-radius: 0.25rem;
  border: 1px solid rgb(205, 213, 223);
  padding-left: 0.6rem;
  color: rgb(43, 55, 70);
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  letter-spacing: 0.0125rem;
`;
