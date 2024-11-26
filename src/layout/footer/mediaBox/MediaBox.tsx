import React from "react";
import { Socials } from "../../../components/socials/Socials";
import { SocialItemInterface } from "../../../data/interfaces";
import { S } from "../Footer_Styles"

export const MediaBox: React.FC<{items: Array<SocialItemInterface>}> = ({items}) => {
  return (
    <S.MediaBox>
      <S.TitleMediaBox>Media</S.TitleMediaBox>
      <Socials items={items} />
    </S.MediaBox>
  );
};