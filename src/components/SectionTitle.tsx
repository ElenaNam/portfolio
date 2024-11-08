import styled, { css } from "styled-components";


type SectionTitlePropsType = {
  hasLine?: boolean
  widthLine?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  margin: 0 0 47px;
  font-size: 32px;
  font-weight: 500;

  ${props => props.hasLine && css<SectionTitlePropsType>`
    &:after {
      content: '';
      margin-left: 16px;
      display: inline-block;
      vertical-align: middle;
      background-color: #C778DD;
      width: ${props => props.widthLine || '127px'};
      height: 1px;
    }
  `}

  &:before {
    content: "#";
    color: #c778dd;
  }
`;
