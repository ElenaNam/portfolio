import React from "react";
import styled from "styled-components";
import { Contact } from "./contact/Contact";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";

export const ContactsBox = () => {
  return (
    <StyledContactsBox>
      <Title>Message me here</Title>
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
    </StyledContactsBox>
  );
};

const StyledContactsBox = styled.div`
  padding: 16px;
  border: 1px solid ${theme.colors.secondary};
`;
const Title = styled.div`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.32;
  color: ${theme.colors.main};
`;
