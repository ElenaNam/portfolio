import { ProjectInterface } from "@data/types";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Project } from "../project/Project";
import { S } from "../Projects_Styles";

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
        isCached={item.isCached}
        cat={item.cat}
        task={item.task}
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

export const ProjectsSection: React.FC<{
  items: Array<ProjectInterface>;
  title: string;
}> = ({ items, title }) => {
  return (
    <S.ProjectsSection>
      <S.ProjectsSectionTitle>{title}</S.ProjectsSectionTitle>
      <Carousel items={items} />
    </S.ProjectsSection>
  );
};
