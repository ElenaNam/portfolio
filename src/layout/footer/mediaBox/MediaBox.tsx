import React from "react";
import { Socials } from "../../../components/socials/Socials";
import { SocialItemInterface } from "../../../data/interfaces";
import { S } from "../Footer_Styles"

export const MediaBox = ({items}:{items: Array<SocialItemInterface>}) => {
  return (
    <S.MediaBox>
      <S.TitleMediaBox>Media</S.TitleMediaBox>
      <Socials items={items} />
    </S.MediaBox>
  );
};