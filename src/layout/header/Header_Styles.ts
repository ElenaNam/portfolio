import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 32px 0 8px;
  z-index: 99999;
  background-color: ${theme.colors.primary};

  @media ${theme.media.tablet} {
    padding-top: 16px;
  }
`;

export const S = {
  Header,
};
