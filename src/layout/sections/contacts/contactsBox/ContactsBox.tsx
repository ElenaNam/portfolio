import React from 'react';
import styled from 'styled-components';
import { Contact } from './contact/Contact';

export const ContactsBox = () => {
  return (
    <StyledContactsBox>
      <Title>Message me here</Title>
      <Contact iconId='discord' title='!Elias#3519' width='23px' height='17px' viewBox='0 0 23 17' />
      <Contact iconId='email' title='elias@elias.me' width='23px' height='17px' viewBox='0 0 23 17' />
    </StyledContactsBox>
  );
};

const StyledContactsBox = styled.div`
    padding: 16px;
    border: 1px solid #ABB2BF;
`
const Title = styled.div`
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 16px;
`
