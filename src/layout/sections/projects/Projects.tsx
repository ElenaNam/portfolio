import React from "react";
import { SectionTitle } from "@components/SectionTitle";
import { FlexWrapper } from "@components/FlexWrapper";

import { Container } from "@components/Container";
import { ProjectCats, ProjectInterface } from "@data/types";
import { S } from "./Projects_Styles";
import { ProjectsSection } from "./projectsSection/ProjectsSection";

export const Projects: React.FC<{ items: Array<ProjectInterface> }> = ({
  items,
}) => {
  return (
    <S.Projects id="works">
      <Container>
        <FlexWrapper justify="space-between">
          <SectionTitle hasLine widthLine="511px">
            projects
          </SectionTitle>
        </FlexWrapper>

        {(Object.keys(ProjectCats) as Array<keyof typeof ProjectCats>).map(
          (key) => {
            const filteredItems = items.filter(
              (i) => i.cat === ProjectCats[key]
            );
            return (
              <ProjectsSection items={filteredItems} title={ProjectCats[key]} />
            );
          }
        )}
      </Container>
    </S.Projects>
  );
};
