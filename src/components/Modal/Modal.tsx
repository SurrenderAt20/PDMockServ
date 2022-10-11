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
  NameFieldOneLabel
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
                        <NameFieldOneLabel>
                            <span title="First name"> First name </span>
                        </NameFieldOneLabel>
                    </NameFieldOneSpecs>
                  </NameFieldOne>
                  <NameFieldOne></NameFieldOne>
                </NameFields>
              </StyledFieldsContainer>
            </Group>
          </Form>
        </FormContainer>
      </ModalContainer>
    </Container>
  );
}
