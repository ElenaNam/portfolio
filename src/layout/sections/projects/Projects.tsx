import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";

import { Container } from "../../../components/Container";
import { ProjectInterface } from "../../../App";

export const Projects = ({ items }: { items: Array<ProjectInterface> }) => {
  return (
    <StyledProjects id="works">
      <Container>
        <FlexWrapper justify="space-between">
          <SectionTitle hasLine widthLine="511px">
            projects
          </SectionTitle>
          <StyledLink href="">View all</StyledLink>
        </FlexWrapper>

        <FlexWrapper wrap="wrap" gap="16px" align="flex-start">
          {items.map((item) => (
            <Project
              key={item.id}
              imgSrc={item.imgSrc}
              title={item.title}
              desc={item.desc}
              stack={item.stack}
              link={item.link}
              isCached={item.id === 0 && true}
            />
          ))}
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMTU1IiB2aWV3Qm94PSIwIDAgNjggMTU1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjE1NCIgaGVpZ2h0PSIxNTQiIHN0cm9rZT0iI0FCQjJCRiIvPgo8L3N2Zz4K")
    no-repeat right center;
`;

const StyledLink = styled.a`
  &:after {
    content: "~~>";
    margin-left: 10px;
  }
`;
