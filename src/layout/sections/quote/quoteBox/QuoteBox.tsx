import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type QuoteBoxType = {
  text: string;
  author: string;
};

export const QuoteBox = (props: QuoteBoxType) => {
  return (
    <StyledQuoteBox>
      <FlexWrapper direction="column">
        <QuoteTitle>{props.text}</QuoteTitle>
        <QuoteAuthor>- {props.author}</QuoteAuthor>
      </FlexWrapper>
    </StyledQuoteBox>
  );
};

const StyledQuoteBox = styled.div`
  max-width: 712px;
  color: ${theme.colors.main};
`;

const QuoteTitle = styled.div`
  position: relative;
  padding: 31px;
  border: 1px solid ${theme.colors.secondary};
  font-size: 24px;
  font-weight: 500;
  z-index: 1;

  &:before,
  &:after {
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCA0MiAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQxLjQ3MiIgaGVpZ2h0PSIyOC43MDQiIGZpbGw9IiMyODJDMzMiLz4KPHBhdGggZD0iTTE4LjU2IDE5LjYxNkMxOC41NiAyMS4wNDUzIDE4LjAzNzMgMjIuMjUwNyAxNi45OTIgMjMuMjMyQzE1Ljk2OCAyNC4yMTMzIDE0LjcyIDI0LjcwNCAxMy4yNDggMjQuNzA0QzExLjczMzMgMjQuNzA0IDEwLjQ3NDcgMjQuMjEzMyA5LjQ3MiAyMy4yMzJDOC40OTA2NyAyMi4yNTA3IDggMjEuMDQ1MyA4IDE5LjYxNkM4IDE4LjkzMzMgOC4wOTYgMTguMjA4IDguMjg4IDE3LjQ0QzguNDggMTYuNjcyIDguODY0IDE1LjY4IDkuNDQgMTQuNDY0TDE0LjQgNEgxOS4yTDE2LjU0NCAxNS41ODRDMTcuMTQxMyAxNi4wMTA3IDE3LjYyMTMgMTYuNTc2IDE3Ljk4NCAxNy4yOEMxOC4zNjggMTcuOTYyNyAxOC41NiAxOC43NDEzIDE4LjU2IDE5LjYxNlpNMzIuOCAxOS42MTZDMzIuOCAyMS4wNDUzIDMyLjI3NzMgMjIuMjUwNyAzMS4yMzIgMjMuMjMyQzMwLjE4NjcgMjQuMjEzMyAyOC45Mzg3IDI0LjcwNCAyNy40ODggMjQuNzA0QzI2LjAxNiAyNC43MDQgMjQuNzY4IDI0LjIxMzMgMjMuNzQ0IDIzLjIzMkMyMi43NDEzIDIyLjI1MDcgMjIuMjQgMjEuMDQ1MyAyMi4yNCAxOS42MTZDMjIuMjQgMTguOTMzMyAyMi4zMzYgMTguMjA4IDIyLjUyOCAxNy40NEMyMi43MiAxNi42NzIgMjMuMTE0NyAxNS42OCAyMy43MTIgMTQuNDY0TDI4LjcwNCA0SDMzLjQ3MkwzMC43ODQgMTUuNTg0QzMxLjQwMjcgMTYuMDEwNyAzMS44OTMzIDE2LjU3NiAzMi4yNTYgMTcuMjhDMzIuNjE4NyAxNy45NjI3IDMyLjggMTguNzQxMyAzMi44IDE5LjYxNloiIGZpbGw9IiNBQkIyQkYiLz4KPC9zdmc+Cg==");
    width: 41px;
    height: 29px;
    z-index: 10;
    position: absolute;
  }

  &:before {
    top: -15px;
    left: 10px;
  }

  &:after {
    bottom: -15px;
    right: 15px;
  }
`;

const QuoteAuthor = styled.div`
  align-self: flex-end;
  padding: 15px;
  border: 1px solid ${theme.colors.secondary};
  border-top: none;
  font-size: 24px;
`;
