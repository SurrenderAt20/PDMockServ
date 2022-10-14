import React from "react";
import {
  Container,
  ModalContainer,
  ContentHeader,
  DefaultButton,
  TopWrapper,
  StyledCloseIcon,
  FormContainer,
  Form,
  Group
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
        <FormContainer>
          <Form>
            <Group>
              {children}
            </Group>
          </Form>
        </FormContainer>
      </ModalContainer>
    </Container>
  );
}