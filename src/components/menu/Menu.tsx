import React from "react";
import styled from "styled-components";
import { Select } from "../select/Select";
import { MenuItemInterface } from "../../layout/header/Header";
import { theme } from "../../styles/Theme";

interface MenuPropsInterface {
  items: MenuItemInterface[];
}

export const Menu: React.FC<MenuPropsInterface> = ({ items }) => {
  return (
    <StyledBox>
      <StyledNav>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a href={item.link} className={item.id === 0 ? "active" : ""}>
                {item.title}
              </a>
            </li>
          ))}
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
`;

const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }

  a {
    color: ${theme.colors.secondary};
    font-weight: 400;

    :hover {
      color: ${theme.colors.main};
    }

    :before {
      content: "#";
      color: ${theme.colors.accent};
      font-weight: 400;
    }

    &.active {
      color: ${theme.colors.main};
      font-weight: 500;

      &:before {
        font-weight: 500;
      }
    }
  }
`;
