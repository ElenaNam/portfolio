import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import img from "../../../assets/images/skills.png";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle hasLine widthLine="239px">
        skills
      </SectionTitle>
      <FlexWrapper justify="space-between" gap="59px">
        <Img src={img} alt="" />
        <ColumnWrapper>
          <Skill title="Languages" desc="TypeScript Lua Python JavaScript" />
          <Skill title="Databases" desc="SQLite PostgreSQL Mongo" />
          <Skill title="Other" desc="HTML CSS EJS SCSS REST Jinja" />
          <Skill title="Tools" desc="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome" />
          <Skill title="Frameworks" desc="React Vue Disnake Discord.js Flask Express.js" />
        </ColumnWrapper>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;

const Img = styled.img`
  width: 100%;
  max-width: 349px;
  height: 282px;
`;

const ColumnWrapper = styled.div`
    column-count: 3;
    column-gap: 16px;

    width: 584px;
    height: 280px;

    & > *:first-of-type {
        height: 100%;
    }
`