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
} from "./styledModal";

export default function Modal(props: any) {
  //new modal branch

  return (
    <Container>
      <ModalContainer>
        <ContentHeader>
          <h4>Create Employee</h4>
          <AiOutlineClose></AiOutlineClose>
        </ContentHeader>
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

                <NameFields>
                  <NameFieldOne>
                    <NameFieldOneSpecs>
                      <Label>
                        <span title="gender"> Gender* </span>
                      </Label>
                      <NameFieldInputWrapper>
                        <NameFieldInput type="text"></NameFieldInput>
                      </NameFieldInputWrapper>
                    </NameFieldOneSpecs>
                  </NameFieldOne>
                  <NameFieldTwo>
                    <NameFieldOneSpecs>
                      <Label>
                        <span title="salary">Confirm</span>
                      </Label>
                      <NameFieldInputWrapper>
                        <NameFieldInput></NameFieldInput>
                      </NameFieldInputWrapper>
                    </NameFieldOneSpecs>
                  </NameFieldTwo>
                </NameFields>
              </StyledFieldsContainer>
            </Group>
          </Form>
        </FormContainer>
      </ModalContainer>
    </Container>
  );
}
