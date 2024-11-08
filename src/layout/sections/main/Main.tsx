import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/button/Button.styled';
import Img from '../../../assets/images/person-1.png'

export const Main = () => {
  return (
    <StyledMain>
        <FlexWrapper>
            <div>
                <h1>Elias is a web designer and front-end developer</h1>
                <span>He crafts responsive websites where technologies meet creativity</span>
                <Button bgColor='C778DD'>Contact me!!</Button>
            </div>
            <div>
                <Photo src={Img} alt='' /> 
                <Note>Currently working on Portfolio</Note>
            </div>
        </FlexWrapper>
        <QuoteBox>
            <QuoteTitle>With great power comes great electricity bill</QuoteTitle>
            <QuoteAuthor>- Dr. Who</QuoteAuthor>
        </QuoteBox>
    </StyledMain>
  );
};


const StyledMain = styled.div`
    min-height: 100vh;
`

const Photo = styled.img`
    width: 100%;
    max-width: 469px;
    height: 100%;
    max-height: 386px;
    object-fit: cover;
`

const Note = styled.div`
    &:before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: #C778DD;
    }
`

const QuoteBox = styled.div`

`

const QuoteTitle = styled.div`

`

const QuoteAuthor = styled.div`

`
