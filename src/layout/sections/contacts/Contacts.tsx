import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ContactsBox } from "./contactsBox/ContactsBox";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles"

export const Contacts = () => {
  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle hasLine>contacts</SectionTitle>
        <FlexWrapper justify="space-between" wrap="wrap" gap="16px">
          <S.Text>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </S.Text>
          <ContactsBox />
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};
