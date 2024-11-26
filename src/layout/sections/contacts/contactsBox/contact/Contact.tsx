import React from 'react';
import { Icon } from '../../../../../components/icon/Icon';
import { S } from "../../Contacts_Styles"

type ContactPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string
    link: string
}

export const Contact: React.FC<ContactPropsType> = (props: ContactPropsType) => {
  return (
    <S.Contact href={props.link} target="_blank">
      <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
      <span>{props.title}</span>
    </S.Contact>
  );
};
