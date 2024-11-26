import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iMTAzIiB2aWV3Qm94PSIwIDAgNTIgMTAzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSIwLjUiIGN5PSIyIiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9IjI1LjI1IiBjeT0iMiIgcj0iMiIgZmlsbD0iI0FCQjJCRiIvPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjIiIHI9IjIiIGZpbGw9IiNBQkIyQkYiLz4KPGNpcmNsZSBjeD0iMC41IiBjeT0iMjYuNzUiIHI9IjIiIGZpbGw9IiNBQkIyQkYiLz4KPGNpcmNsZSBjeD0iMjUuMjUiIGN5PSIyNi43NSIgcj0iMiIgZmlsbD0iI0FCQjJCRiIvPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjI2Ljc1IiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9IjAuNSIgY3k9IjUxLjUiIHI9IjIiIGZpbGw9IiNBQkIyQkYiLz4KPGNpcmNsZSBjeD0iMjUuMjUiIGN5PSI1MS41IiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTEuNSIgcj0iMiIgZmlsbD0iI0FCQjJCRiIvPgo8Y2lyY2xlIGN4PSIwLjUiIGN5PSI3Ni4yNSIgcj0iMiIgZmlsbD0iI0FCQjJCRiIvPgo8Y2lyY2xlIGN4PSIyNS4yNSIgY3k9Ijc2LjI1IiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNzYuMjUiIHI9IjIiIGZpbGw9IiNBQkIyQkYiLz4KPGNpcmNsZSBjeD0iMC41IiBjeT0iMTAxIiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9IjI1LjI1IiBjeT0iMTAxIiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMTAxIiByPSIyIiBmaWxsPSIjQUJCMkJGIi8+Cjwvc3ZnPgo=")
    no-repeat left bottom 25%;

  h2 {
    margin-bottom: 45px;
  }

  @media ${theme.media.largeScreen} {
    background: none;
  }
`;

const Text = styled.p`
  max-width: 465px;
  font-weight: 500;
  line-height: 1.32;
`;

const ContactsBox = styled.div`
  padding: 16px;
  border: 1px solid ${theme.colors.secondary};
`;

const Title = styled.div`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.32;
  color: ${theme.colors.main};
`;

const Contact = styled.a`
    display: flex;
    align-items: center;

    svg {
        margin-right: 9px;
    }

    span {
      line-height: 2;
    }

    &:hover {
      color: ${theme.colors.main};
    }
`

export const S = {
    Contacts,
    Text,
    ContactsBox,
    Title,
    Contact
}