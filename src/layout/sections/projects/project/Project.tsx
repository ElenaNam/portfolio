import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/button/Button.styled";
import { ProjectInterface } from "../../../../App";
import { theme } from "../../../../styles/Theme";

export const Project = (props: ProjectInterface) => {
  return (
    <StyledProject>
      <Image src={props.imgSrc} alt={props.title} />
      <Stack>{props.stack.map((item) => `${item} `)}</Stack>
      <Info>
        <h3>{props.title}</h3>
        <span>{props.desc}</span>
        <FlexWrapper gap="16px">
          <Button as="a" href="" bgColor="#C778DD" colored>
            Live
          </Button>
          {props.isCached && (
            <Button as="a" href="" primary>
              Cached
            </Button>
          )}
        </FlexWrapper>
      </Info>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 330px;
  border: 1px solid #abb2bf;

  h3 {
    max-width: 85%;
    font-size: 24px;
    font-weight: 500;
    color: ${theme.colors.main};
  }

  span {
    display: inline-block;
    margin: 16px 0;
    font-size: 16px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 201px;
  object-fit: cover;
  border-bottom: 1px solid #abb2bf;
`;

const Info = styled.div`
  padding: 15px;
`;

const Stack = styled.div`
  padding: 0 7px;
  line-height: 37px;
  border-bottom: 1px solid #abb2bf;
`;
