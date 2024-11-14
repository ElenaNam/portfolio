import React from "react";
import styled from "styled-components";
import { Socials } from "../../components/socials/Socials";
import { theme } from "../../styles/Theme";
import { SocialItemInterface } from "../../App";

export const Aside = ({list}: {list: Array<SocialItemInterface>}) => {
  return (
    <StyledAside>
      <Socials items={list} />
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  position: fixed;
  top: 0;
  padding: 0 17px 17px;
  z-index: 999999;

  text-align: center;

  &:before {
    content: "";
    display: inline-block;
    margin-bottom: 14px;
    width: 1px;
    height: 191px;
    background-color: ${theme.colors.secondary};
  }

  li + li {
    margin-top: 18px;
  }
`;


