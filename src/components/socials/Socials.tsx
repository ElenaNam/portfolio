import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { SocialItemInterface } from "../../data/interfaces";
import { theme } from "../../styles/Theme";


export const Socials: React.FC<{items: Array<SocialItemInterface>, onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void }> = ({items, onClick}) => {
  return (
    <StyledSocials>
        {items.map((item => <SocialItem><a href={item.link} target="_blank" rel="noreferrer" onClick={onClick}>
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

    &:hover {
      color: ${theme.colors.main};
    }
  }
`;
