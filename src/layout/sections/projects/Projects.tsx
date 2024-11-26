import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";

import { Container } from "../../../components/Container";
import { ProjectInterface } from "../../../data/interfaces";
import { S } from "./Projects_Styles"


export const Projects = ({ items }: { items: Array<ProjectInterface> }) => {
  return (
    <S.Projects id="works">
      <Container>
        <FlexWrapper justify="space-between">
          <SectionTitle hasLine widthLine="511px">
            projects
          </SectionTitle>
          <S.Link href="">View all</S.Link>
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
    </S.Projects>
  );
};
