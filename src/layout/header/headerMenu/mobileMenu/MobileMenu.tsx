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
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  }

  return (
    <S.MobileNav>
      <S.BurgerButton onClick={handleClick} isOpen={isOpen}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={isOpen}>
        <Menu items={items} onClick={() => setOpen(false)} />
        <Socials items={list} onClick={() => setOpen(false)} />
      </S.MobileMenuPopup>
    </S.MobileNav>
  );
};
