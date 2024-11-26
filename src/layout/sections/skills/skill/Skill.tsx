import React from "react";
import { S } from "../Skills_Styles"

type SkillPropsType = {
  title: string;
  desc: string;
};

export const Skill: React.FC<SkillPropsType> = (props) => {
  return (
    <S.Skill>
      <S.Box>
        <S.Title>{props.title}</S.Title>
        <S.Desc><span>{props.desc}</span></S.Desc>
      </S.Box>
    </S.Skill>
  );
};