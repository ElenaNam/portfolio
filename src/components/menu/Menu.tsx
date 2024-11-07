import React from "react";
import styled from "styled-components";
import { Select } from "../select/Select";

export const Menu = () => {
  return (
    <StyledBox>
      <StyledNav>
        <ul>
          <li>
            <a href="/home">home</a>
          </li>
          <li>
            <a href="/works">works</a>
          </li>
          <li>
            <a href="/about">about-me</a>
          </li>
          <li>
            <a href="/contacts">contacts</a>
          </li>
        </ul>
      </StyledNav>
      <Select />
    </StyledBox>
  );
};

const StyledBox = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`
const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }

  a {
    color: #abb2bf;
    font-weight: 400;
  }

  a:hover {
    color: #fff;
    font-weight: 500;

    &:before {
      font-weight: 500;
    }
  }

  a:before {
    content: "#";
    color: #c778dd;
    font-weight: 400;
  }
`;
