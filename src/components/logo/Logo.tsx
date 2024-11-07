import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <StyledLogo href='/'>
      <Icon iconId='logo' width='16' height='17' viewBox="0 0 52 52"/>
      <span>Elias</span>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
`
