import React from 'react'
import {useState} from 'react'
import {Container, ModalContainer, ContentHeader, FormContainer, Form, Group, StyledGroupHeading} from './styledModal'


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
                        </StyledGroupHeading>

                    </Group>

                </Form>
            </FormContainer>
        </ModalContainer>
    </Container>
  )
}
