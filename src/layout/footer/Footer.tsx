import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MediaBox } from "./mediaBox/MediaBox";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="space-between">
          <div>
            <FlexWrapper gap="24px">
              <Logo />
              <Link href="mailto:elias@elias-dev.ml">elias@elias-dev.ml</Link>
            </FlexWrapper>
            <Text>Web designer and front-end developer</Text>
          </div>
          <MediaBox />
        </FlexWrapper>
        <TextBottom>© Copyright 2022. Made by Elias</TextBottom>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 32px 0;
  border-top: 1px solid #abb2bf;
`;
const Link = styled.a``;
const Text = styled.span`
  font-size: 16px;
`;
const TextBottom = styled.div`
  margin-top: 48px;
  text-align: center;
`;
