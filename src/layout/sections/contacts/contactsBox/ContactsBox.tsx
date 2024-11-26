import React from "react";
import { Contact } from "./contact/Contact";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Contacts_Styles"

export const ContactsBox = () => {
  return (
    <S.ContactsBox>
      <S.Title>Message me here</S.Title>
      <FlexWrapper direction="column" gap="8px">
        <Contact
          iconId="discord"
          title="!Elias#3519"
        />
        <Contact
          iconId="email"
          title="elias@elias.me"
        />
      </FlexWrapper>
    </S.ContactsBox>
  );
};
