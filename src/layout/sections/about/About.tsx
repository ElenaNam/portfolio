import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button.styled";
import img from "../../../assets/images/person-2.png";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { S } from "./About_Styles"
import { theme } from "../../../styles/Theme";

export const About = () => {
  return (
    <S.About id="about">
      <Container>
        <FlexWrapper justify="space-between" wrap="wrap">
          <div>
            <SectionTitle hasLine widthLine="326px">
              about-me
            </SectionTitle>

            <S.Info>
              <S.Text>Hello, i’m Elias!</S.Text>
              <S.Text>
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I
                can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences.
              </S.Text>
              <S.Text>
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </S.Text>
              <Button bgColor={theme.colors.accent} colored>
                Read more
              </Button>
            </S.Info>
          </div>

          <S.Img src={img} alt="" />
        </FlexWrapper>
      </Container>
    </S.About>
  );
};
