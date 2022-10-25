import React from "react";
import {
  Container,
  ModalContainer,
  ContentHeader,
  DefaultButton,
  DeleteDefaultButton,
  TopWrapper,
  StyledCloseIcon,
  FormContainer,
  Form,
  Group,
} from "./styledModal";

interface Props {
  title: string;
  children: React.ReactNode;
  onSave?: (event: any) => void;
  onClose: () => void;
  onDelete?: (event: any) => void;
}

export default function Modal({ title, children, onSave, onClose, onDelete }: Props) {
  //new modal branch

  return (
    <Container>
      <ModalContainer>
        <ContentHeader>
          <h4>{title}</h4>
          <TopWrapper>
            {onDelete && <DeleteDefaultButton onClick={onDelete}>Delete User</DeleteDefaultButton>}
            {onSave && <DefaultButton onClick={onSave}>Save</DefaultButton>}
            <StyledCloseIcon onClick={onClose}></StyledCloseIcon>
          </TopWrapper>
        </ContentHeader>
        <FormContainer>
          <Form>
            <Group>{children}</Group>
          </Form>
        </FormContainer>
      </ModalContainer>
    </Container>
  );
}
