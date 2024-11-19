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
        <FlexWrapper justify="space-between">
          <div>
            <SectionTitle hasLine widthLine="326px">
              about-me
            </SectionTitle>

            <Info>
              <Text>Hello, i’m Elias!</Text>
              <Text>
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I
                can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences.
              </Text>
              <Text>
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </Text>
              <Button bgColor="#C778DD" colored>
                Read more
              </Button>
            </Info>
          </div>

          <Img src={img} alt="" />
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  position: relative;

  &:before {
    content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzgiIGhlaWdodD0iMTU1IiB2aWV3Qm94PSIwIDAgNzggMTU1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSItNzYuNSIgeT0iMC41IiB3aWR0aD0iMTU0IiBoZWlnaHQ9IjE1NCIgc3Ryb2tlPSIjQUJCMkJGIi8+Cjwvc3ZnPgo=');
    position: absolute;
    left: 0;
    top: 35%;
  }

  &:after {
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMTAzIiB2aWV3Qm94PSIwIDAgODAgMTAzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI0FCQjJCRiIvPgo8Y2lyY2xlIGN4PSIyNi43NSIgY3k9IjIiIHI9IjIiIGZpbGw9IiNBQkIyQkYiLz4KPGNpcmNsZSBjeD0iNTEuNSIgY3k9IjIiIHI9IjIiIGZpbGw9IiNBQkIyQkYiLz4KPGNpcmNsZSBjeD0iNzYuMjUiIGN5PSIyIiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9IjIiIGN5PSIyNi43NSIgcj0iMiIgZmlsbD0iI0FCQjJCRiIvPgo8Y2lyY2xlIGN4PSIyNi43NSIgY3k9IjI2Ljc1IiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9IjUxLjUiIGN5PSIyNi43NSIgcj0iMiIgZmlsbD0iI0FCQjJCRiIvPgo8Y2lyY2xlIGN4PSI3Ni4yNSIgY3k9IjI2Ljc1IiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9IjIiIGN5PSI1MS41IiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9IjI2Ljc1IiBjeT0iNTEuNSIgcj0iMiIgZmlsbD0iI0FCQjJCRiIvPgo8Y2lyY2xlIGN4PSI1MS41IiBjeT0iNTEuNSIgcj0iMiIgZmlsbD0iI0FCQjJCRiIvPgo8Y2lyY2xlIGN4PSI3Ni4yNSIgY3k9IjUxLjUiIHI9IjIiIGZpbGw9IiNBQkIyQkYiLz4KPGNpcmNsZSBjeD0iMiIgY3k9Ijc2LjI1IiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9IjI2Ljc1IiBjeT0iNzYuMjUiIHI9IjIiIGZpbGw9IiNBQkIyQkYiLz4KPGNpcmNsZSBjeD0iNTEuNSIgY3k9Ijc2LjI1IiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9Ijc2LjI1IiBjeT0iNzYuMjUiIHI9IjIiIGZpbGw9IiNBQkIyQkYiLz4KPGNpcmNsZSBjeD0iMiIgY3k9IjEwMSIgcj0iMiIgZmlsbD0iI0FCQjJCRiIvPgo8Y2lyY2xlIGN4PSIyNi43NSIgY3k9IjEwMSIgcj0iMiIgZmlsbD0iI0FCQjJCRiIvPgo8Y2lyY2xlIGN4PSI1MS41IiBjeT0iMTAxIiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9Ijc2LjI1IiBjeT0iMTAxIiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+Cjwvc3ZnPgo=");
    position: absolute;
    right: 0;
    bottom: 25%;
  }

  h2 {
    margin-bottom: 23px;
  }
`;

const Info = styled.div`
  max-width: 515px;
`;

const Text = styled.p`
  margin-bottom: 27px;
  line-height: 1.625;
`;

const Img = styled.img`
  width: 343px;
  height: 508px;
  object-fit: cover;
`;
