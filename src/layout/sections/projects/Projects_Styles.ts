import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Projects = styled.section`
  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMTU1IiB2aWV3Qm94PSIwIDAgNjggMTU1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjE1NCIgaGVpZ2h0PSIxNTQiIHN0cm9rZT0iI0FCQjJCRiIvPgo8L3N2Zz4K")
    no-repeat right center;

  @media ${theme.media.largeScreen} {
    background: none;
  }
`;

const Link = styled.a`
  line-height: 2.8;

  &:after {
    content: "~~>";
    margin-left: 10px;
  }

  &:hover {
    color: ${theme.colors.main};
  }
`;

const Project = styled.div`
  /* max-width: calc((100% - 32px) / 3);
  min-width: 272px; */
  width: 100%;

  flex-shrink: 0;
  border: 1px solid ${theme.colors.secondary};
  transition: .3s;

  h3 {
    ${font({ Fmin: 22, Fmax: 24, weight: 500, color: theme.colors.main })};

    max-width: 85%;
  }

  span {
    display: inline-block;
    margin: 16px 0;
    font-size: 16px;
  }

  &:hover { 
    //transform: translateY(-2px);
    box-shadow: 3px 3px 8px -4px  ${theme.colors.add};
    background-color: #7a797718;;
  }

  @media ${theme.media.mobile} {
    max-width: 330px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 201px;
  object-fit: cover;
  border-bottom: 1px solid ${theme.colors.secondary};
`;

const Info = styled.div`
  padding: 15px;
`;

const Stack = styled.div`
  padding: 0 7px;
  line-height: 35px;
  border-bottom: 1px solid ${theme.colors.secondary};
`;

export const S = {
    Projects,
    Link,
    Project,
    Image,
    Info,
    Stack
}

