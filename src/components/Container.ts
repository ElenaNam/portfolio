import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Container = styled.div`
    width: 100%;
    max-width: 1145px;
    min-height: 100%;
    padding: 0 60px;
    margin: 0 auto;

    @media ${theme.media.tablet} {
        padding: 0 32px;
    }

    @media ${theme.media.mobile} {
        padding: 0 16px;
    }
`