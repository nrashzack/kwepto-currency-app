import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
    html {
        box-sizing: border-box;
    }
    body {
        margin:0;
        padding:0;
        background-color: #FFF6EA;
        color: #000;
        font-family: 'Poppins', sans-serif;
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
        font-weight: 400;
        color: #484848;
    }

    h1,strong {
        color:#484848;
    }

    h1 {
        font-weight: 800;
    }

    a{
        text-decoration:none;
        &:hover {
            cursor: pointer;
        }
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

    li {
    list-style-type: none;
    color: #484848;
    }

    img{
        &:hover{
            pointer-events:none;
        }
    }
`;
