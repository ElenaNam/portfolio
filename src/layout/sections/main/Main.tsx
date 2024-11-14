import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button.styled";
import Img from "../../../assets/images/person-1.png";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between">
          <Info>
            <FlexWrapper direction="column">
              <Title>
                Elias is a <span>web designer</span> and{" "}
                <span>front-end developer</span>
              </Title>
              <Description>
                He crafts responsive websites where technologies meet creativity
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
  //min-height: 100vh;
  padding-top: 112px;
`;

const Info = styled.div`
  padding: 74px 18px 0 0;
  max-width: 535px;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;

  span {
    color: ${theme.colors.accent};
  }
`;

const Description = styled.span`
  display: inline-block;
  max-width: 85%;
  margin: 32px 0 24px;
  line-height: 1.5;
`;

const PhotoWrapper = styled.div`
  font-size: 0;
`

const Photo = styled.img`
  width: 100%;
  max-width: 469px;
  height: 100%;
  max-height: 386px;
  object-fit: cover;
`;

const Note = styled.div`
  display: flex;
  align-items: center;

  max-width: 402px;
  margin: 0 auto;
  padding: 7px;

  border: 1px solid ${theme.colors.secondary};
  font-size: 16px;
  font-weight: 500;

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


