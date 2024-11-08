import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";

import ImgProject1 from "../../../assets/images/project-1.png";
import ImgProject2 from "../../../assets/images/project-2.png";
import ImgProject3 from "../../../assets/images/project-3.png";

export const Projects = () => {
  return (
    <StyledProjects>
      <FlexWrapper justify="space-between">
        <SectionTitle hasLine widthLine="511px">projects</SectionTitle>
        <StyledLink href=''>View all</StyledLink>
      </FlexWrapper>
      
      <FlexWrapper wrap="wrap" gap="16px">
        <Project
          imgSrc={ImgProject1}
          title="ChertNodes"
          desc="Minecraft servers hosting "
          stack="HTML SCSS Python Flask"
        />
        <Project
          imgSrc={ImgProject2}
          title="ProtectX"
          desc="Discord anti-crash bot"
          stack="React Express Discord.js Node.js HTML SCSS Python Flask"
        />
        <Project
          imgSrc={ImgProject3}
          title="Kahoot Answers Viewer"
          desc="Get answers to your kahoot quiz"
          stack="CSS Express Node.js Flask"
        />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.div``;

const StyledLink = styled.a`
    &:after {
        content: '~~>';
        margin-left: 10px;
    }
`
