import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

// Menu

const Menu = styled.ul`
  display: flex;
  gap: 32px;

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

  @media ${theme.media.tablet} {
    flex-direction: column;

    a {
      color: ${theme.colors.secondary};
      font-weight: 400;
      font-size: 32px;

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
  }
`;

// Mobile Menu

const MobileNav = styled.nav`
  display: flex;
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  display: none;
  padding: 47px 32px 36px;
  position: fixed;
  top: 48px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background-color: ${theme.colors.primary};

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      ul:last-of-type {
        display: flex;
        justify-content: center;
        gap: 8px;
      }
    `}

  @media ${theme.media.mobile} {
    padding-inline: 16px;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  //position: fixed;
  //top: 16px;
  //right: 16px;
  width: 24px;
  height: 24px;
  border: none;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 15px;
    background-color: ${theme.colors.add};

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
        width: 24px;
      `}

    &:after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      height: 2px;
      width: 24px;
      background-color: ${theme.colors.add};
      transform: translateY(-5px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(90deg) translateY(0);
        `}
    }
  }
`;

// Desktop Menu

const DesktopBox = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const DesktopNav = styled.nav``;

export const S = {
  Menu,
  MobileNav,
  MobileMenuPopup,
  BurgerButton,
  DesktopBox,
  DesktopNav,
};
