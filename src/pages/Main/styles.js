import styled, {keyframes, css} from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin-top: 20px;

    li{
        font-size: 16px;
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        & + li{
            border-top: 1px solid #eee;
        }

        a{
            color: #0D2636;
            text-decoration: none;
        }
    }
`;

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 5px;
    padding: 30px;
    margin: 80px auto;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

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
        border: 1px solid ${props => (props.error ? "#FF0000" : "#EEE")};
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 16px;
    }
`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
    margin-left: 5px;
    background: transparent;
    color: #0D2636;
    border: 0;
    padding: 8px;
    outline: 0;
    border-radius: 5px;
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
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

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.loading && 
        css`
            svg{
                animation: ${animate} 2s linear infinite;  
            }
        `   
    }
`;

//animação de giro (loading)
const animate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

