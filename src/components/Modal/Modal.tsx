import React from "react";
import { useState } from "react";
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
  EmailFieldsContainer,
  EmailFieldInputWrapper,
  EmailFieldInput,
} from "./styledModal";

export default function Modal(props: any) {
  //new modal branch

  return (
    <Container>
      <ModalContainer>
        <ContentHeader>
          <h4>Create Employee</h4>
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
                        <span title="First name"> First name* </span>
                      </Label>
                      <NameFieldInputWrapper>
                        <NameFieldInput></NameFieldInput>
                      </NameFieldInputWrapper>
                    </NameFieldOneSpecs>
                  </NameFieldOne>
                  <NameFieldTwo>
                    <NameFieldOneSpecs>
                      <Label>
                        <span title="surname"> Surname* </span>
                      </Label>
                      <NameFieldInputWrapper>
                        <NameFieldInput></NameFieldInput>
                      </NameFieldInputWrapper>
                    </NameFieldOneSpecs>
                  </NameFieldTwo>
                </NameFields>

                <EmailFieldsContainer>
                  <Label>
                    <span title="email"> Email (Username)* </span>
                  </Label>
                  <EmailFieldInputWrapper>
                    <EmailFieldInput></EmailFieldInput>
                  </EmailFieldInputWrapper>
                </EmailFieldsContainer>
              </StyledFieldsContainer>
            </Group>
          </Form>
        </FormContainer>
      </ModalContainer>
    </Container>
  );
}
