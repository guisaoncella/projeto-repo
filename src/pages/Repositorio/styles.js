import styled, {keyframes, css} from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 5px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin: 80px auto;
`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    img{
        width: 200px;
        border-radius: 20%;
        margin-bottom: 10px;
    }

    h1{
        font-size: 30px;
        color: #0D2636;
        margin-bottom: 10px;
    }

    p{
        font-size: 16px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
`;

export const BackButton = styled(Link)`
    svg{
        padding: 8px;
        border-radius: 50%;
        border: 1px solid #000;
    }
    svg:hover{
        border: 3px solid #000;  
        transition: border 0.2s;
    }
`;

export const IssuesList = styled.ul`

`;