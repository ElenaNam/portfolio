import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import img from "../../../assets/images/person-2.png";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { S } from "./About_Styles"
import { theme } from "../../../styles/Theme";

export const About: React.FC = () => {
  return (
    <S.About id="about">
      <Container>
        <FlexWrapper justify="space-between" wrap="wrap">
          <div>
            <SectionTitle hasLine widthLine="326px">
              about-me
            </SectionTitle>

            <S.Info>
              <S.Text>Hello, i’m Elena!</S.Text>
              <S.Text>
                I’m a front-end developer based in Samara, Russia. I&nbsp;can develop responsive websites from scratch and&nbsp;raise them into
                modern user-friendly web experiences.
              </S.Text>
              <S.Text>
                Transforming my creativity and knowledge into a&nbsp;websites has
                been my passion for over 3&nbsp;years. I&nbsp;have been helping various
                clients to establish their presence online. I&nbsp;always strive to
                learn about the newest technologies and&nbsp;frameworks.
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
