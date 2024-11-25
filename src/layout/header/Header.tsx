import React from "react";

import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MenuItemInterface, SocialItemInterface } from "../../data/interfaces";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

export const Header: React.FC<{
  menu: Array<MenuItemInterface>;
  mobileList: Array<SocialItemInterface>;
}> = ({
  menu,
  mobileList,
}: {
  menu: Array<MenuItemInterface>;
  mobileList: Array<SocialItemInterface>;
}) => {
  const [width, SetWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => SetWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          {width < breakpoint ? (
            <MobileMenu items={menu} list={mobileList} />
          ) : (
            <DesktopMenu items={menu} />
          )}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
