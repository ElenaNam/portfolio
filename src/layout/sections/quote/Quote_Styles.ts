import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Quote = styled.section`
  padding-bottom: 18px;

  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iOTEiIHZpZXdCb3g9IjAgMCA4MiA5MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgc3Ryb2tlPSIjQUJCMkJGIi8+Cjwvc3ZnPgo=")
    no-repeat right center;

  @media ${theme.media.largeScreen} {
    background: none;
  }  
`;

const QuoteBox = styled.div`
  max-width: 712px;
`;

const QuoteTitle = styled.div`
  ${font({ Fmax: 24, Fmin: 20, weight: 500, color: theme.colors.main })};

  position: relative;
  padding: 31px;
  border: 1px solid ${theme.colors.secondary};
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

  @media ${theme.media.tablet} {
    padding: 20px;

    &:before,
    &:after {
      width: 30px;
      height: 22px;
    }

    &:after {
      bottom: -10px;
      right: 22px;
    }
  }
`;

const QuoteAuthor = styled.div`
  ${font({ Fmax: 24, Fmin: 20, color: theme.colors.main })};

  align-self: flex-end;
  padding: 20px 15px 15px;
  border: 1px solid ${theme.colors.secondary};
  border-top: none;
`;

export const S = {
    Quote,
    QuoteBox,
    QuoteTitle,
    QuoteAuthor
}