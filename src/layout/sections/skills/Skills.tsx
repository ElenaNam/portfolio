import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import img from "../../../assets/images/skills.png";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles"

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle hasLine widthLine="239px">
          skills
        </SectionTitle>
        <FlexWrapper justify="space-between" wrap="wrap">
          <S.Img src={img} alt="" aria-hidden />
          <S.ColumnWrapper>
            <Skill title="Languages" desc="TypeScript Lua Python JavaScript" />
            <Skill title="Databases" desc="SQLite PostgreSQL Mongo" />
            <Skill title="Other" desc="HTML CSS EJS SCSS REST Jinja" />
            <Skill
              title="Tools"
              desc="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"
            />
            <Skill
              title="Frameworks"
              desc="React Vue Disnake Discord.js Flask Express.js"
            />
          </S.ColumnWrapper>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
