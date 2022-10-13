import React from "react";
import {
  Container,
  ModalContainer,
  ContentHeader,
  DefaultButton,
  TopWrapper,
  StyledCloseIcon,
} from "./styledModal";

interface Props {
  title: string;
  children: React.ReactNode;
  onSave?: (event: any) => void;
  onClose: () => void;
}

export default function Modal({ title, children, onSave, onClose }: Props) {
  //new modal branch

  return (
    <Container>
      <ModalContainer>
        <ContentHeader>
          <h4>{title}</h4>
          <TopWrapper>
            {onSave && <DefaultButton onClick={onSave}>Save</DefaultButton>}
            <StyledCloseIcon onClick={onClose}></StyledCloseIcon>
          </TopWrapper>
        </ContentHeader>
        {children}
      </ModalContainer>
    </Container>
  );
}

{/* <FormContainer>
<Form>
  <Group>
    <StyledGroupHeading>
      <h4>Personal Details</h4>
      <TopSpecs></TopSpecs>
    </StyledGroupHeading>

    <StyledFieldsContainer>
      <NameFields>
        <NameFieldOne>
          <NameFieldOneSpecs>
            <Label>
              <span title="name"> Name* </span>
            </Label>
            <NameFieldInputWrapper>
              <NameFieldInput type="text"></NameFieldInput>
            </NameFieldInputWrapper>
          </NameFieldOneSpecs>
        </NameFieldOne>
        <NameFieldTwo>
          <NameFieldOneSpecs>
            <Label>
              <span title="salary"> Salary* </span>
            </Label>
            <NameFieldInputWrapper>
              <NameFieldInput></NameFieldInput>
            </NameFieldInputWrapper>
          </NameFieldOneSpecs>
        </NameFieldTwo>
      </NameFields>

      <BirthdayFieldsContainer>
        <Label>
          <span title="birthday"> Birthday* </span>
        </Label>
        <BirthdayFieldInputWrapper>
          <BirthdayFieldInput type="date"></BirthdayFieldInput>
        </BirthdayFieldInputWrapper>
      </BirthdayFieldsContainer>

      <GenderContainer>
        <Label>
          <span title="gender"> Gender* </span>
        </Label>
        <br />
        <br />
        <GenderFieldInputWrapper>
          <LabelAndInputWrapper>
            <label>Female </label>
            <GenderInput type="radio"></GenderInput>
          </LabelAndInputWrapper>
          <LabelAndInputWrapper>
            <label>Male </label>
            <GenderInput type="radio"></GenderInput>
          </LabelAndInputWrapper>
        </GenderFieldInputWrapper>
      </GenderContainer>
    </StyledFieldsContainer>
  </Group>
</Form>
</FormContainer> */}