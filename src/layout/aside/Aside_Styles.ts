import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Aside = styled.aside`
  position: fixed;
  top: 0;
  padding: 0 17px 17px;
  z-index: 999999;
  text-align: center;

  @media ${theme.media.largeScreen} {
    display: none;
    visibility: hidden;
  }

  &:before {
    content: "";
    display: inline-block;
    margin-bottom: 8px;
    width: 1px;
    height: 191px;
    background-color: ${theme.colors.secondary};
  }

  li + li {
    margin-top: 8px;
  }
`;

export const S = {
    Aside
}