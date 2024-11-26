import React from "react";
import { MenuItemInterface } from "../../../../data/interfaces";
import { S } from "../HeaderMenu_Styles";

export const Menu: React.FC<{ items: Array<MenuItemInterface>, onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void }> = ({
  items, onClick
}) => {
  return (
    <S.Menu>
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.link} onClick={onClick}>
            {item.title}
          </a>
        </li>
      ))}
    </S.Menu>
  );
};
