import React from "react";
import styled from "styled-components";
import { Socials } from "../../../components/socials/Socials";
import { theme } from "../../../styles/Theme";

const dataSocials2 = [
  {
    id: 0,
    title: "github",
    width: "21px",
    height: "20px",
    viewBox: "0 0 21 20",
  },
  {
    id: 1,
    title: "figma",
    width: "14px",
    height: "20px",
    viewBox: "0 0 14 20",
  },
  {
    id: 2,
    title: "discord",
    width: "25px",
    height: "20px",
    viewBox: "0 0 25 20",
  },
];

export const MediaBox = () => {
  return (
    <StyledMediaBox>
      <Title>Media</Title>
      <Socials items={dataSocials2} />
    </StyledMediaBox>
  );
};

const StyledMediaBox = styled.div`
  max-width: 112px;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    font-size: 0;
  }
`;

const Title = styled.div`
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 1.3;
  font-weight: 500;
  color: ${theme.colors.main};
`;
