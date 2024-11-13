import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

export interface MenuItemInterface {
  id: number
  title: string
  link: string
}

const dataMenuItems: Array<MenuItemInterface> = [
  {
    id: 0, 
    title: 'home',
    link: '/'
  },
  {
    id: 1, 
    title: 'works',
    link: '/works/'
  },
  {
    id: 2, 
    title: 'about-me',
    link: '/about/'
  },
  {
    id: 3, 
    title: 'contacts',
    link: '/contacts/'
  },

]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Menu items={dataMenuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 32px 0 8px;
  z-index: 99999;
  background-color: ${theme.colors.primary};
`;
