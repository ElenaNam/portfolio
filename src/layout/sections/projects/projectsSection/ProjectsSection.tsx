import { ProjectInterface } from "@data/types";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useMediaQuery } from "react-responsive";
import { Project } from "../project/Project";
import { S } from "../Projects_Styles";
import { useState } from "react";
import { Icon } from "@components/icon/Icon";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Carousel: React.FC<{ items: Array<ProjectInterface> }> = ({ items }) => {
  const [carousel, setCarousel] = useState<AliceCarousel | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // Определяем количество видимых элементов через useMediaQuery
  let visibleItems = 1;
  const isTablet = useMediaQuery({ minWidth: 568 });
  if (isDesktop) visibleItems = 3;
  else if (isTablet) visibleItems = 2;

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

  const handleSlideChanged = (e: { item: number }) => {
    setCurrentIndex(e.item);
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= items.length - visibleItems;

  return (
    <S.CarouselWrapper>
      <AliceCarousel
        mouseTracking
        disableDotsControls
        disableButtonsControls
        items={carouselItems}
        responsive={responsive}
        ref={(el) => setCarousel(el)}
        onSlideChanged={handleSlideChanged}
      />
      {isDesktop && carousel && items.length > 3 && (
        <>
          <S.NavButton
            left
            onClick={() => !isPrevDisabled && carousel.slidePrev()}
            disabled={isPrevDisabled}
          >
            <Icon iconId="arrow" width="48" height="48" viewBox="0 0 24 24" />
          </S.NavButton>
          <S.NavButton
            right
            onClick={() => !isNextDisabled && carousel.slideNext()}
            disabled={isNextDisabled}
          >
            <Icon iconId="arrow" width="48" height="48" viewBox="0 0 24 24" />
          </S.NavButton>
        </>
      )}
    </S.CarouselWrapper>
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
