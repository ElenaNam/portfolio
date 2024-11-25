import React from "react";

//import { Select } from "../../../components/select/Select";
import { MenuItemInterface } from "../../../../data/interfaces";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const DesktopMenu: React.FC<{ items: Array<MenuItemInterface> }> = ({
  items,
}) => {
  return (
    <S.DesktopBox>
      <S.DesktopNav>
        <Menu items={items} />
      </S.DesktopNav>
      {/* <Select /> */}
    </S.DesktopBox>
  );
};
