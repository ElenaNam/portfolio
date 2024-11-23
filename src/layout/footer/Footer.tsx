import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MediaBox } from "./mediaBox/MediaBox";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          <div>
            <FlexWrapper wrap="wrap">
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
  margin-top: 89px;
  padding: 32px 0;
  border-top: 1px solid ${theme.colors.secondary};

  @media ${theme.media.mobile} {
    margin-top: 25px;
  }
`;
const Link = styled.a`
  display: inline-block;
  margin-left: 24px;

  &:hover {
    color: ${theme.colors.main};
  }

  @media ${theme.media.mobile} {
    margin: 12px 0 0;
    width: 100%;
  }
`;

const Text = styled.span`
  display: inline-block;
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.32;
  color: ${theme.colors.main};

  @media ${theme.media.mobile} {
    margin-bottom: 16px;
  }
`;

const TextBottom = styled.span`
  display: inline-block;
  width: 100%;
  margin-top: 48px;
  text-align: center;
  font-size: 16px;
  line-height: 1.32;
`;
