import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import Img from "../../../assets/images/person-1.png";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles"


export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify="space-between" wrap="wrap">
          <S.Info>
            <FlexWrapper direction="column">
              <S.Title>
                Elena Kirillova is a&nbsp;
                <span style={{whiteSpace: "nowrap"}}>front-end developer</span>
              </S.Title>
              <S.Description>
                She crafts responsive websites where technologies meet&nbsp;creativity
              </S.Description>
              <Button as="a" href="#contacts" colored>
                Contact me!!
              </Button>
            </FlexWrapper>
          </S.Info>
          <S.PhotoWrapper>
            <S.Photo src={Img} alt="" />
            <S.Note>Currently working on&nbsp;<span>Portfolio</span></S.Note>
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};



