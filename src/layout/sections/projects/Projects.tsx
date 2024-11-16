import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";

import { Container } from "../../../components/Container";
import { ProjectInterface } from "../../../App";

export const Projects = ({items}:{items: Array<ProjectInterface>}) => {
  return (
    <StyledProjects id="works">
      <Container>
        <FlexWrapper justify="space-between">
          <SectionTitle hasLine widthLine="511px">
            projects
          </SectionTitle>
          <StyledLink href="">View all</StyledLink>
        </FlexWrapper>

        <FlexWrapper wrap="wrap" gap="16px">
          {
          items.map(item => <Project key={item.id}
            imgSrc={item.imgSrc}
            title={item.title}
            desc={item.desc}
            stack={item.stack}
            link={item.link}
           />)}

        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;

const StyledLink = styled.a`
  &:after {
    content: "~~>";
    margin-left: 10px;
  }
`;
