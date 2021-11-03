import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 5px;
    padding: 30px;
    margin: 80px auto;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);

    h1{
        font-size: 20px;
        display: flex;
        flex-direction: row;
        
        svg{
            margin-right: 10px;
        }
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: 1px solid #DDD;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 16px;
    }
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit'
})`
    background: #0D2636;
    border: 0;
    border-radius: 5px;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        background: #253B4A;    
        transition: background 0.4s;
    }
`;