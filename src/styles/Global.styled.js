import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    html {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        background-color: #fff;
        color: #2d3436;
        font-family: 'Roboto', sans-serif;
        letter-spacing: .01rem;
    }

    p,
    small,
    strong,
    h1,
    h2,
    h3,
    span,
    li,
    ol,
    ul,
    img, 
    div, 
    nav {
        padding:0;
        margin:0;
    }

    p {
        font-size: 12px;
    }

    h1 {
        font-weight:bolder;
    }

    button {
        border: 0;
        background: none;
        padding: 0;
        margin: 0;
    
        &:hover {
            cursor: pointer;
        }
    }
`;
