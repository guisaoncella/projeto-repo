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
    margin-top: 30px;
    padding-top: 50px;
    border-top: 1px solid #DDD;
    list-style: none;


    li{
        display: flex;
        padding: 10px 0px;
        border-bottom: 1px solid #DDD;

        & + li{
            margin-top: 40px;
        }

        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
            border: 2px solid #0D2636;
        }

        div{
            flex: 1;
            margin-left: 12px;
            a{
                font-size: 16px;
                font-weight: 600;
                text-decoration: none;
                color: #16537e;
                transition: all 0.3s;
                margin-bottom: 100px;
            }
            a:hover{
                color: #2986cc;
                text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
            } 
            
            span{
                display: inline-block;
                background: #222;
                color: #FFF;
                border-radius: 5px;
                font-size: 12px;
                font-weight: 600;
                padding: 5px 7px;
                margin-left: 5px;
                margin-top: 10px;
                word-break: keep-all;
            }

            p{
                margin-top: 10px;
                font-size: 14px;
                font-weight: bold;
                color: #000;
            }
        }
    }
`;

export const PageActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    button{
        font-size: 16px;
        outline: 0;
        border: 0;
        background: #222;
        color: #FFF;
        padding: 5px 10px;
        border-radius: 5px;
        transition: all 0.5s;
        :hover{
            background: #444;
        }
        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
    
`;