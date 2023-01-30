import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    :root {
        --background-gradient: linear-gradient(
    0deg,
    rgba(5, 0, 10, 1) 0%,
    rgba(171, 11, 153, 1) 70%,
    rgba(213, 108, 197, 1) 100%,
    rgba(194, 201, 255, 1) 100%
  );
  --background-gradient-2: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(171,11,153,1) 100%);
        --footer-background: black;
        --primary: darkmagenta;
        --secondary: lightslategrey;
    }
`;

export default GlobalStyles;
