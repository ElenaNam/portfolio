import React from "react";
import styled from "styled-components";
import { Socials } from "../../../components/socials/Socials";
import { theme } from "../../../styles/Theme";

const dataSocials2 = [
  {
    id: 0,
    title: "github",
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32",
  },
  {
    id: 1,
    title: "figma",
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32",
  },
  {
    id: 2,
    title: "discord",
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32",
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
