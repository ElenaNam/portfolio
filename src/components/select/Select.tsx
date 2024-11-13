import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Select = () => {
  return (
    <StyledSelect>
      <SelectButton aria-label="Выбрать язык">EN</SelectButton>
      <SelectItemsWrapper>
        <SelectItems>
          <SelectItem>RU</SelectItem>
          <SelectItem>DE</SelectItem>
        </SelectItems>
      </SelectItemsWrapper>
    </StyledSelect>
  );
};

const StyledSelect = styled.div`
  position: relative;

  &:hover {
    div {
      height: 100%;
      opacity: 1;
    }

    button:after {
      transform: scaleY(-1);
    }
  }
`;

const SelectItemsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 0;
  opacity: 0;
  transition: all 0.3s ease;
`;

const SelectItems = styled.ul`
  padding: 7px;
  border: 1px solid ${theme.colors.secondary};
`;

const SelectItem = styled.li`
  width: 100%;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  & + & {
    margin-bottom: 0;
  }

  &:hover {
    color: ${theme.colors.main};
  }
`;

const SelectButton = styled.button`
  background-color: transparent;
  border: 0;
  font-weight: 600;

  &:after {
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEwIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxsaW5lIHgxPSIwLjcwNzEwNyIgeTE9IjEuMjkyODkiIHgyPSI1LjcwNzExIiB5Mj0iNi4yOTI4OSIgc3Ryb2tlPSIjQUJCMkJGIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjQuMjkyODkiIHkxPSI2LjI5Mjg5IiB4Mj0iOS4yOTI4OSIgeTI9IjEuMjkyODkiIHN0cm9rZT0iI0FCQjJCRiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=");
    display: inline-block;
    margin-left: 4px;
    transition: transform 0.3s ease;
  }
`;
