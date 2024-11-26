import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Logo: React.FC = () => {
  return (
    <StyledLogo href="./">
      <Icon iconId="logo" width="16" height="17" viewBox="0 0 53 53" />
      <span>El_Ki</span>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.32;
  color: ${theme.colors.main};

  &:hover {
    color: ${theme.colors.accent};
  }
`;
