import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

type ButtonPropsType = {
  primary?: boolean;
  colored?: boolean;
  bgColor?: string;
  href?: string;
  alignSelf?: string;
};

export const Button = styled.button<ButtonPropsType>`
  flex-grow: 0;
  flex-shrink: 0;
  align-self: ${(props) => props.alignSelf || "flex-start"};

  padding: 7px 15px;
  position: relative;

  border: 1px solid;
  background-color: transparent;

  font-family: inherit;
  font-size: 16px;
  line-height: 1.32;
  font-weight: 500;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s;
  }

  &:hover {
    &:before {
      opacity: 0.2;
    }
  }

  ${(props) =>
    props.primary &&
    css<ButtonPropsType>`
      border-color: ${(props) => props.bgColor || theme.colors.secondary};
      color: ${theme.colors.secondary};

      &:before {
        background-color: ${(props) => props.bgColor || theme.colors.secondary};
      }
    `}

  ${(props) =>
    props.colored &&
    css<ButtonPropsType>`
      border-color: ${(props) => props.bgColor || theme.colors.accent};
      color: ${theme.colors.main};

      &:before {
        background-color: ${(props) => props.bgColor || theme.colors.accent};
      }
    `}
`;
