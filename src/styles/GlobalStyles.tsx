import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #282C33;
        color: #fff;
    }

    ul {
        padding: 0;
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        color: inherit;
    }
`