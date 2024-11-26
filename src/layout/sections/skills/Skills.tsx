import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import img from "../../../assets/images/skills.png";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles"
import { SkillsInterface } from "../../../data/interfaces";

export const Skills: React.FC<{items: Array<SkillsInterface>}> = ({items}) => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle hasLine widthLine="239px">
          skills
        </SectionTitle>
        <FlexWrapper justify="space-between" wrap="wrap">
          <S.Img src={img} alt="" aria-hidden />
          <S.ColumnWrapper>
            {items.map(item => <Skill key={item.id} title={item.title} desc={item.desc} />)}
          </S.ColumnWrapper>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
