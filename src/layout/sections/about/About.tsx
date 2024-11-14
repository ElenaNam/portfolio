import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button.styled";
import img from "../../../assets/images/person-2.png";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";

export const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <SectionTitle hasLine widthLine="326px">
          about-me
        </SectionTitle>
        <FlexWrapper>
          <div>
            <Text>Hello, i’m Elias!</Text>
            <Text>
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </Text>
            <Text>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </Text>
            <Button bgColor="#C778DD">Read more</Button>
          </div>
          <Img src={img} alt="" />
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section``;

const Text = styled.p`
  margin-bottom: 26px;
`;
const Img = styled.img`
  width: 343px;
  height: 508px;
  object-fit: cover;
`;
