import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0
    }

    body {
        background: #312e38;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
        display: flex;
        flex-direction: column;
    }

    body, input, button{
        font-family: 'Open Sans Condensed', 'Open Sans', sans-serif;
        font-size: 32px;
    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 500;
        font-family: 'Kaushan Script', cursive;
    }

    button{
        cursor: pointer;
    }
`