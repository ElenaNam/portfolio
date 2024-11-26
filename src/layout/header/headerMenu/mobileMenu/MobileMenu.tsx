import React from "react";
import { Socials } from "../../../../components/socials/Socials";
import {
  MenuItemInterface,
  SocialItemInterface,
} from "../../../../data/interfaces";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const MobileMenu: React.FC<{
  items: Array<MenuItemInterface>;
  list: Array<SocialItemInterface>;
}> = ({ items, list }) => {
  return (
    <S.MobileNav>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={false}>
        <Menu items={items} />
        <Socials items={list} />
      </S.MobileMenuPopup>
    </S.MobileNav>
  );
};
