import { createGlobalStyle } from "styled-components";
import FiraCodeRegular from "../assets/fonts/FiraCode-Regular.ttf";
import FiraCodeMedium from "../assets/fonts/FiraCode-Medium.ttf";
import FiraCodeSemiBold from "../assets/fonts/FiraCode-SemiBold.ttf";
import FiraCodeBold from "../assets/fonts/FiraCode-Bold.ttf";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Fira Code';
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        src: url(${FiraCodeRegular}) format('ttf')
    }

    @font-face {
        font-family: 'Fira Code';
        font-weight: 500;
        font-style: normal;
        font-display: swap;
        src: url(${FiraCodeMedium}) format('ttf')
    }

    @font-face {
        font-family: 'Fira Code';
        font-weight: 600;
        font-style: normal;
        font-display: swap;
        src: url(${FiraCodeSemiBold}) format('ttf')
    }

    @font-face {
        font-family: 'Fira Code';
        font-weight: 700;
        font-style: normal;
        font-display: swap;
        src: url(${FiraCodeBold}) format('ttf')
    }

    *, 
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Fira Code", monospace;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.secondary};
        line-height: 1.2;
        scroll-behavior: smooth;
    }

    ul {
        padding: 0;
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: all .3s;
    }

    button {
        color: inherit;
        cursor: pointer;
        transition: all .3s;
    }

    section {
        padding: 56px 0;
    }
`;
