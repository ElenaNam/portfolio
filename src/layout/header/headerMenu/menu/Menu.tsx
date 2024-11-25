import React from "react";
import { MenuItemInterface } from "../../../../data/interfaces";
import { S } from "../HeaderMenu_Styles";

export const Menu: React.FC<{ items: Array<MenuItemInterface> }> = ({
  items,
}) => {
  return (
    <S.Menu>
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.link} className={item.id === 0 ? "active" : ""}>
            {item.title}
          </a>
        </li>
      ))}
    </S.Menu>
  );
};
