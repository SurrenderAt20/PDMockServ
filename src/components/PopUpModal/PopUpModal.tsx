import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai";
import { Container, ContentHeader, Form, FormContainer, Group, PopUpModalContainer, StyledCloseIcon, TopWrapper } from './styledPopUpModal'

interface Props {
  title: string;
  children: React.ReactNode;
  onSave?: (event: any) => void;
  onClose: () => void;
  onDelete?: (event: any) => void;
}

export default function PopUpModal({title, children, onSave, onClose, onDelete}: Props) {

  return (
    <Container>
      <PopUpModalContainer>
        <ContentHeader>
          <h4>{title}</h4>
          <TopWrapper>
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
      </PopUpModalContainer>
    </Container>
  )
}
