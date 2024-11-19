import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ContactsBox } from "./contactsBox/ContactsBox";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <StyledContacts id="contacts">
      <Container>
        <SectionTitle hasLine>contacts</SectionTitle>
        <FlexWrapper>
          <Text>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </Text>
          <ContactsBox />
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  h2 {
    margin-bottom: 45px;
  }
`;

const Text = styled.p`
  max-width: 505px;
`;
