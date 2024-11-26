import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/button/Button";
import { ProjectInterface } from "../../../../data/interfaces";
import { S } from "../Projects_Styles"
import { theme } from "../../../../styles/Theme";

export const Project: React.FC<ProjectInterface> = (props) => {
  return (
    <S.Project>
      <S.Image src={props.imgSrc} alt={props.title} />
      <S.Stack>{props.stack.map((item) => `${item} `)}</S.Stack>
      <S.Info>
        <h3>{props.title}</h3>
        <span>{props.desc}</span>
        <FlexWrapper gap="16px">
          <Button as="a" href="" bgColor={theme.colors.accent} colored>
            Live
          </Button>
          {props.isCached && (
            <Button as="a" href="" primary>
              Cached
            </Button>
          )}
        </FlexWrapper>
      </S.Info>
    </S.Project>
  );
};
