import React from "react";
import styled from "styled-components";
import { Socials } from "../../../components/socials/Socials";
import { theme } from "../../../styles/Theme";
import { SocialItemInterface } from "../../../data/interfaces";

export const MediaBox = ({items}:{items: Array<SocialItemInterface>}) => {
  return (
    <StyledMediaBox>
      <Title>Media</Title>
      <Socials items={items} />
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

  @media ${theme.media.mobile} {
    display: none;
  }
`;
