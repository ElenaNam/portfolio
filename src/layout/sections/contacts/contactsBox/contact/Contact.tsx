import React from 'react';
import { Icon } from '../../../../../components/icon/Icon';
import { S } from "../../Contacts_Styles"

type ContactPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string
}

export const Contact = (props: ContactPropsType) => {
  return (
    <S.Contact>
      <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
      <span>{props.title}</span>
    </S.Contact>
  );
};
