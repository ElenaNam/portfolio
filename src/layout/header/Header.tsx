import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MenuItemInterface, SocialItemInterface } from "../../App";
import { MobileMenu } from "./mobileMenu/MobileMenu";

export const Header = ({ menu, list, mobileList }: { menu: Array<MenuItemInterface>, list: Array<SocialItemInterface>, mobileList: Array<SocialItemInterface> }) => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <HeaderMenu items={menu} />
          <MobileMenu items={menu} list={mobileList} />
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

  @media ${theme.media.mobile} {
    padding-top: 16px;
  }
`;
