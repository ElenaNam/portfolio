import React from "react";
import { Contact } from "./contact/Contact";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Contacts_Styles"

export const ContactsBox: React.FC = () => {
  return (
    <S.ContactsBox>
      <S.Title>Message me here</S.Title>
      <FlexWrapper direction="column" gap="8px">
        <Contact
          iconId="tg"
          title="@el_kiri"
          link="https://t.me/el_kiri"
        />
        <Contact
          iconId="email"
          title="el-ki-ri@yandex.ru"
          link="mailto:el-ki-ri@yandex.ru"
        />
      </FlexWrapper>
    </S.ContactsBox>
  );
};
