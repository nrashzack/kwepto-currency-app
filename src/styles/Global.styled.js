import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    html {
        box-sizing: border-box;
    }
    body {
        margin:0;
        padding:0;
        background-color: #fff ;
        color: #000;
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
        color: #636e72;
    }

    h1,strong {
        color:#2d3436;
    }

    h1 {
        font-weight: bolder;
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
