import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  h2 {
    margin-bottom: 10px;
  }
`;

const Img = styled.img`
  margin: 0 32px;
  width: 100%;
  max-width: 349px;
  height: 283px;
  object-fit: cover;

  @media ${theme.media.largeScreen} {
    max-width: 270px;
    height: 219px;
  }

  @media ${theme.media.tablet} {
    display: none;
    visibility: hidden;
  }
`;

const ColumnWrapper = styled.div`
  margin-top: 31px;
  column-count: 3;
  column-gap: 0;

  width: 584px;
  min-height: 280px;

  & > * {
    max-width: 178px;
  }

  & > *:first-of-type {
    height: 100%;
  }
  & > *:last-child,
  & > *:nth-last-child(2) {
    max-width: 196px;
  }

  @media ${theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    
    min-height: 1px;
    height: auto;
    width: 100%;

    & > *:first-of-type {
      height: auto;
    }

    & > *,
    & > *:last-child,
    & > *:nth-last-child(2) {
      max-width: 200px;
    }
  }
`;

const Skill = styled.div`
  display: inline-block;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  @media ${theme.media.tablet} {
    display: flex;

    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  }
`;

const Box = styled.div`
  width: 100%;
  border: 1px solid ${theme.colors.secondary};
`;

const Title = styled.div`
  padding: 7px;
  border-bottom: 1px solid ${theme.colors.secondary};
  color: ${theme.colors.main};
  font-weight: 600;
  line-height: 1.32;
`;

const Desc = styled.div`
  padding: 7px 7px 2px;
  line-height: 1.75;
  letter-spacing: -.3px;
`;

export const S = {
    Skills,
    Img,
    ColumnWrapper,
    Skill,
    Box,
    Title,
    Desc
}