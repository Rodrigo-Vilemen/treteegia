import styled from "styled-components";

export const Container = styled.div` 
    min-height: calc(100vh - (72px * 2));
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
`

export const ContentLogin = styled.div`
    background: #052;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        width: 90%;
        min-width: 10rem;
        display: flex;
        justify-content: flex-start;
    }

    p{
        width: 100%;
        max-width: 15rem;
    }
`;

export const ContainerTextLogin =styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    p{
        width: 100%;
        max-width: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const ContainerLogin =styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputContainer = styled.div`
    width: 90%;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    label{
        width: 100%;
    }

    input{
        width: 100%;
    }

`;

export const ButtonLogin = styled.button`

`;


const Content = styled.div`
    top: 302px;
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 146px;
    bottom: 50px;

    img {
        width: 154px;
        height: 78px;
        margin-left: 334px;
        top: -241px;
    }
    p {
        bottom: 146px;
        position: relative;
        font-size: 24px;
    }

    label {
        margin-bottom: 10px;
    }
    input {
        width: 464px;
        height: 30px;
        border-radius: 9px;
        box-sizing: border-box;
        border: 3px solid #C4C4C4;
        background: #FFFFFF;
        outline: none;
    }
`