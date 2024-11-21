import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

type SectionTitlePropsType = {
  hasLine?: boolean;
  widthLine?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  ${font({Fmin: 28, Fmax: 32, weight: 500, lineHeight: 1.32})};

  position: relative;
  margin: 0 0 47px;

  ${(props) =>
    props.hasLine &&
    css<SectionTitlePropsType>`
      &:after {
        content: "";
        margin-left: 16px;
        display: inline-block;
        vertical-align: middle;
        background-color: ${theme.colors.accent};
        width: ${(props) => props.widthLine || "127px"};
        height: 1px;

        @media ${theme.media.mediumScreen} {
          width: 220px;
        }
        @media ${theme.media.mobile} {
          position: absolute;
          bottom: 0;
          left: -15px;
          width: 100%
        }
      }
    `}

  &:before {
    content: "#";
    color: ${theme.colors.accent};
  }
`;
