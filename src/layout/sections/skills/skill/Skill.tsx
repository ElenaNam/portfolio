import React from 'react';
import styled from 'styled-components';

type SkillPropsType = {
    title: string
    desc: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
        <Box>
            <Title>{props.title}</Title>
            <Desc>{props.desc}</Desc>
        </Box>
    </StyledSkill>
  );
};


const StyledSkill = styled.div`
    display: inline-block;
    margin-bottom: 16px;
    width: 178px;
`
const Box = styled.div`
    border: 1px solid #ABB2BF;
`

const Title = styled.div`
    border-bottom: 1px solid #ABB2BF;
`
const Desc = styled.div`
    
`