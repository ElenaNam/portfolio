import React from "react";
import { SectionTitle } from "@components/SectionTitle";
import { FlexWrapper } from "@components/FlexWrapper";
import { ContactsBox } from "./contactsBox/ContactsBox";
import { Container } from "@components/Container";
import { S } from "./Contacts_Styles";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle hasLine>contacts</SectionTitle>
        <FlexWrapper justify="space-between" wrap="wrap" gap="16px">
          <S.Text>
            Open to work opportunities with: TypeScript, React, Redux, Redux
            Toolkit, Next.js, and&nbsp;RTK Query.
            <br />
            If you have a&nbsp;relevant project or questions—let’s discuss!
          </S.Text>
          <ContactsBox />
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};
