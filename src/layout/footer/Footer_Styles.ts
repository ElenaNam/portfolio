import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  margin-top: 89px;
  padding: 32px 0;
  border-top: 1px solid ${theme.colors.secondary};

  @media ${theme.media.mobile} {
    margin-top: 25px;
  }
`;

const Link = styled.a`
  display: inline-block;
  margin-left: 24px;

  &:hover {
    color: ${theme.colors.main};
  }

  @media ${theme.media.mobile} {
    margin: 12px 0 0;
    width: 100%;
  }
`;

const Text = styled.span`
  display: inline-block;
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.32;
  color: ${theme.colors.main};

  @media ${theme.media.mobile} {
    margin-bottom: 16px;
  }
`;

const TextBottom = styled.span`
  display: inline-block;
  width: 100%;
  margin-top: 48px;
  text-align: center;
  font-size: 16px;
  line-height: 1.32;
`;

const MediaBox = styled.div`
  max-width: 112px;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    font-size: 0;
  }
`;

const TitleMediaBox = styled.div`
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 1.3;
  font-weight: 500;
  color: ${theme.colors.main};

  @media ${theme.media.mobile} {
    display: none;
  }
`;

export const S = {
    Footer,
    Link,
    Text,
    TextBottom,
    MediaBox,
    TitleMediaBox
}