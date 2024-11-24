import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/button/Button.styled";
import { ProjectInterface } from "../../../../data/interfaces";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";


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
  max-width: calc((100% - 32px) / 3);
  min-width: 272px;
  width: 100%;

  flex-shrink: 0;
  border: 1px solid ${theme.colors.secondary};
  transition: .3s;

  h3 {
    ${font({ Fmin: 22, Fmax: 24, weight: 500, color: theme.colors.main })};

    max-width: 85%;
  }

  span {
    display: inline-block;
    margin: 16px 0;
    font-size: 16px;
  }

  &:hover { 
    box-shadow: 3px 3px 8px -4px  ${theme.colors.add};
    background-color: #7a797718;;
  }

  @media ${theme.media.mobile} {
    max-width: 330px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 201px;
  object-fit: cover;
  border-bottom: 1px solid ${theme.colors.secondary};
`;

const Info = styled.div`
  padding: 15px;
`;

const Stack = styled.div`
  padding: 0 7px;
  line-height: 35px;
  border-bottom: 1px solid ${theme.colors.secondary};
`;
