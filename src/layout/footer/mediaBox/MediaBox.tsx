import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';

export const MediaBox = () => {
  return (
    <StyledMediaBox>
      <Title>Media</Title>
      <FlexWrapper justify='space-between'>
        <a href='/'>
            <Icon iconId={'github'} width='21px' height='20px' viewBox='0 0 21 20'/>
        </a>
        <a href='/'>
            <Icon iconId={'figma'} width='14px' height='20px' viewBox='0 0 14 20' />
        </a>
        <a href='/'>
            <Icon iconId={'discord'} width='25px' height='20px' viewBox='0 0 25 20' />
        </a>
      </FlexWrapper>
    </StyledMediaBox>
  );
};

const StyledMediaBox = styled.div`
    
`
const Title = styled.div`
    margin-bottom: 12px;
    font-size: 24px;
    font-weight: 500;
`