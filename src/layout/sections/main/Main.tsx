import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import MainImg from "../../../assets/images/main-photo.jpg";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify="space-between" wrap="wrap">
          <S.Info>
            <FlexWrapper direction="column">
              <S.Title>
                Elena Kirillova is a&nbsp;
                <span style={{ whiteSpace: "nowrap" }}>
                  front-end developer
                </span>
              </S.Title>
              <S.Description>
                She crafts responsive websites where technologies
                meet&nbsp;creativity
              </S.Description>
              <Button as="a" href="#contacts" colored>
                Contact me
              </Button>
            </FlexWrapper>
          </S.Info>
          <S.PhotoWrapper>
            {/* <S.Photo src={Img} alt="" /> */}
            <S.Photo src={MainImg} alt="Elena Kirillova" />
            <S.Note>
              Currently working on&nbsp;
              <a
                href="https://github.com/TechnoWhales/podclick"
                target="_blank"
              >
                Podclick
              </a>
            </S.Note>
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
