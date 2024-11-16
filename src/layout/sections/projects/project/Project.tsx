import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/button/Button.styled';
import { ProjectInterface } from '../../../../App';

export const Project = (props: ProjectInterface) => {
  return (
    <StyledProject>
      <Image src={props.imgSrc} alt={props.title} />
      <Stack>{props.stack.map(item => `${item} `)}</Stack>
      <div>
        <h3>{props.title}</h3>
        <span>{props.desc}</span>
        <FlexWrapper gap='16px'>
            <Button as='a' href='' bgColor='#C778DD'>Live</Button>
            <Button as='a' href=''>Cached</Button>
        </FlexWrapper>
      </div>
    </StyledProject>
  );
};

const StyledProject = styled.div`
    border: 1px solid #ABB2BF;
`
const Image = styled.img`
    width: 100%;
    height: 201px;
    object-fit: cover;
    border-bottom: 1px solid #ABB2BF;
`
const Stack = styled.div`
    border-bottom: 1px solid #ABB2BF;
`