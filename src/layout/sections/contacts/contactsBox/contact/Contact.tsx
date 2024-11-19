import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../../components/icon/Icon';

type ContactPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string
}

export const Contact = (props: ContactPropsType) => {
  return (
    <StyledContact>
      <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
      <span>{props.title}</span>
    </StyledContact>
  );
};

const StyledContact = styled.a`
    display: flex;
    align-items: center;

    svg {
        margin-right: 9px;
    }

    span {
      line-height: 2;
    }
`