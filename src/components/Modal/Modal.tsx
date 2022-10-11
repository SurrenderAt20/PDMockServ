import React from 'react'
import {useState} from 'react'
import {Container, ContentContainer, ContentHeader} from './styledModal'


export default function Modal(props: any) {
    //new modal branch

  return (
    <Container>
        <ContentContainer>
            <ContentHeader>
                <h4>Create Employee</h4>
            </ContentHeader>
        </ContentContainer>
    </Container>
  )
}
