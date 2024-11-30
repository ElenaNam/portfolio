import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";

import { Container } from "../../../components/Container";
import { ProjectInterface } from "../../../data/interfaces";
import { S } from "./Projects_Styles"

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};


const Carousel: React.FC<{ items: Array<ProjectInterface> }> = ({ items }) => {
  const carouselItems = items.map((item, i) => (
    <div key={item.id} className="carousel-item item" data-value={i + 1}>
      <Project
        imgSrc={item.imgSrc}
        title={item.title}
        desc={item.desc}
        stack={item.stack}
        link={item.link}
        isCached={item.id === 0 && true}
      />
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      disableDotsControls
      disableButtonsControls
      items={carouselItems}
      responsive={responsive}
    />
  );
};

export const Projects: React.FC<{ items: Array<ProjectInterface> }> = ({ items }) => {
  return (
    <S.Projects id="works">
      <Container>
        <FlexWrapper justify="space-between">
          <SectionTitle hasLine widthLine="511px">
            projects
          </SectionTitle>
        </FlexWrapper>
        < Carousel items={items} />
        {/* <FlexWrapper wrap="wrap" gap="16px" align="flex-start">
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
        </FlexWrapper> */}
      </Container>
    </S.Projects>
  );
};
