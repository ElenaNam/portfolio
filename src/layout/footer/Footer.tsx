import React from "react";

import { FlexWrapper } from "../../components/FlexWrapper";
import { MediaBox } from "./mediaBox/MediaBox";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { SocialItemInterface } from "../../data/interfaces";
import { S } from "./Footer_Styles"

export const Footer: React.FC<{socials: Array<SocialItemInterface>}> = ({socials}) => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          <div>
            <FlexWrapper wrap="wrap">
              <Logo />
              <S.Link href="mailto:el-ki-ri@yandex.ru">el-ki-ri@yandex.ru</S.Link>
            </FlexWrapper>
            <S.Text>Front-end developer</S.Text>
          </div>
          <MediaBox items={socials} />
        </FlexWrapper>
        <S.TextBottom>© Copyright 2024. Made by El_Ki</S.TextBottom>
      </Container>
    </S.Footer>
  );
};