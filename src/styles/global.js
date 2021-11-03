import { createGlobalStyle } from "styled-components";

const cores = {
    main_bg: "#0D2636",
    main_font: "#222"
}

const tamanhos = {
    main_font: "14px"
}

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body{
        background: rgb(37,59,74);
        background: linear-gradient(180deg, rgba(37,59,74,1) 0%, rgba(13,38,54,1) 50%, rgba(10,30,43,1) 100%);
        font-size: ${tamanhos.main_font};
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button{
        color: ${cores.main_font};
        font-size: ${tamanhos.main_font};
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        cursor: pointer;
    }
`;