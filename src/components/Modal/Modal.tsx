import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  Container,
  ModalContainer,
  ContentHeader,
  FormContainer,
  Form,
  Group,
  StyledGroupHeading,
  TopSpecs,
  StyledFieldsContainer,
  NameFields,
  NameFieldOne,
  NameFieldOneSpecs,
  Label,
  NameFieldInputWrapper,
  NameFieldInput,
  NameFieldTwo,
  BirthdayFieldsContainer,
  BirthdayFieldInputWrapper,
  BirthdayFieldInput,
  DefaultButton,
  TopWrapper,
  StyledCloseIcon,
  GenderContainer,
  GenderFieldInputWrapper,
  GenderInput,
  LabelAndInputWrapper,
} from "./styledModal";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Modal({ title, children }: Props) {
  //new modal branch

  return (
    <Container>
      <ModalContainer>
        <ContentHeader>
          <h4>{title}</h4>
          <TopWrapper>
            <DefaultButton>Save</DefaultButton>
            <StyledCloseIcon></StyledCloseIcon>
          </TopWrapper>
        </ContentHeader>
        {children}
        <FormContainer>
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
        </FormContainer>
      </ModalContainer>
    </Container>
  );
}
