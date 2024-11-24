import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button.styled";
import Img from "../../../assets/images/person-1.png";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" wrap="wrap">
          <Info>
            <FlexWrapper direction="column">
              <Title>
                Elias is a <span>web designer</span> and{" "}
                <span style={{whiteSpace: "nowrap"}}>front-end developer</span>
              </Title>
              <Description>
                He crafts responsive websites where technologies meet&nbsp;creativity
              </Description>
              <Button as="a" href="#contacts" colored>
                Contact me!!
              </Button>
            </FlexWrapper>
          </Info>
          <PhotoWrapper>
            <Photo src={Img} alt="" />
            <Note>Currently working on&nbsp;<span>Portfolio</span></Note>
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding-top: 125px;
`;

const Info = styled.div`
  padding: 74px 18px 0 0;
  margin-bottom: 20px;
  max-width: 535px;

  @media ${theme.media.tablet} {
    padding: 0;
  }
`;

const Title = styled.h1`
  ${font({weight: 600, color: theme.colors.main, Fmax: 32, Fmin: 20})}

  span {
    color: ${theme.colors.accent};
  }
`;

const Description = styled.span`
  ${font({lineHeight: 1.5, Fmax: 16, Fmin: 14})}
  display: inline-block;
  max-width: 85%;
  margin: 32px 0 24px;

  @media ${theme.media.mobile} {
    max-width: 90%;
  }
`;

const PhotoWrapper = styled.div`
  font-size: 0;
`

const Photo = styled.img`
  width: 100%;
  max-width: 469px;
  height: 386px;
  object-fit: cover;
  cursor: default;

  @media ${theme.media.largeScreen} {
    max-width: 329px;
    height: 270px;
  }
`;

const Note = styled.div`
  ${font({weight: 500, Fmax: 16, Fmin: 14})}

  display: flex;
  align-items: center;

  max-width: 402px;
  margin: 0 auto;
  padding: 7px;

  border: 1px solid ${theme.colors.secondary};

  &:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    background-color: ${theme.colors.accent}
  }

  span {
    color: ${theme.colors.main};
    font-weight: 600;
  }
`;


