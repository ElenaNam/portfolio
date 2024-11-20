import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { SocialItemInterface } from "../../App";


export const Socials = ({items}: {items: Array<SocialItemInterface>}) => {
  return (
    <StyledSocials>
        {items.map((item => <SocialItem><a href="/">
            <Icon
              iconId={item.title}
              width={item.width}
              height={item.height}
              viewBox={item.viewBox}
            />
          </a></SocialItem>))}
    </StyledSocials>
  );
};

const StyledSocials = styled.ul``;

const SocialItem = styled.li`
  a {
    display: flex;
  }
`;
