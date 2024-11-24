import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  title: string;
  desc: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Box>
        <Title>{props.title}</Title>
        <Desc><span>{props.desc}</span></Desc>
      </Box>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: inline-block;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  @media ${theme.media.tablet} {
    display: flex;

    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  }
`;

const Box = styled.div`
  border: 1px solid ${theme.colors.secondary};
`;

const Title = styled.div`
  padding: 7px;
  border-bottom: 1px solid ${theme.colors.secondary};
  color: ${theme.colors.main};
  font-weight: 600;
  line-height: 1.32;
`;

const Desc = styled.div`
  padding: 7px 7px 2px;
  line-height: 1.75;
  letter-spacing: -.3px;
`;
