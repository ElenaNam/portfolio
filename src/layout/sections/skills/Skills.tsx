import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import img from "../../../assets/images/skills.png";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle hasLine widthLine="239px">
          skills
        </SectionTitle>
        <FlexWrapper justify="space-between" wrap="wrap">
          <Img src={img} alt="" aria-hidden />
          <ColumnWrapper>
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
          </ColumnWrapper>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  h2 {
    margin-bottom: 12px;
  }
`;

const Img = styled.img`
  margin: 0 32px;
  width: 100%;
  max-width: 349px;
  height: 283px;
  object-fit: cover;

  @media ${theme.media.largeScreen} {
    max-width: 270px;
    height: 219px;
  }

  @media ${theme.media.tablet} {
    display: none;
    visibility: hidden;
  }
`;

const ColumnWrapper = styled.div`
  margin-top: 31px;
  column-count: 3;
  column-gap: 0;

  width: 584px;
  height: 280px;

  & > * {
    max-width: 178px;
  }

  & > *:first-of-type {
    height: 100%;
  }
  & > *:last-child,
  & > *:nth-last-child(2) {
    max-width: 196px;
  }

  @media ${theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    height: auto;
    width: 100%;

    & > *:first-of-type {
      height: auto;
    }

    & > *,
    & > *:last-child,
    & > *:nth-last-child(2) {
      max-width: 200px;
    }
  }
`;
