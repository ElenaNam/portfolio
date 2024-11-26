import React from "react";
import { Socials } from "../../components/socials/Socials";
import { SocialItemInterface } from "../../data/interfaces";
import { S } from "./Aside_Styles"

export const Aside: React.FC<{list: Array<SocialItemInterface>}> = ({list}) => {
  return (
    <S.Aside>
      <Socials items={list} />
    </S.Aside>
  );
};