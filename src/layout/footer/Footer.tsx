import React from "react";

import { FlexWrapper } from "../../components/FlexWrapper";
import { MediaBox } from "./mediaBox/MediaBox";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { SocialItemInterface } from "../../data/interfaces";
import { S } from "./Footer_Styles"

export const Footer = ({socials}:{socials: Array<SocialItemInterface>}) => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          <div>
            <FlexWrapper wrap="wrap">
              <Logo />
              <S.Link href="mailto:elias@elias-dev.ml">elias@elias-dev.ml</S.Link>
            </FlexWrapper>
            <S.Text>Web designer and front-end developer</S.Text>
          </div>
          <MediaBox items={socials} />
        </FlexWrapper>
        <S.TextBottom>© Copyright 2022. Made by Elias</S.TextBottom>
      </Container>
    </S.Footer>
  );
};