import React from 'react'
import styled from 'styled-components';
import Botao from '../../components/Button';


function Home() {
    return (
        <Container>
            <ContentLogin>
                <ContainerTextLogin>
                    <p>
                        <span>Planeje</span>
                        <span style={{marginLeft:"1.5rem"}}>no Trello</span>
                    </p>
                    <img src="/images/treteegia.png"  />
                    <p style={{justifyContent:""}}>
                        <span style={{textAlign:"end",marginRight:"1.5rem"}}>Debata no</span>
                        <span style={{textAlign:"end"}}>Strateegia</span>
                    </p>
                </ContainerTextLogin>
                <ContainerLogin>
                <InputContainer>
                    <label>Login do Trello</label>
                    <input type="text"/>
                </InputContainer>
                <InputContainer>
                    <label>Senha</label>
                    <input type="text"/>
                </InputContainer>
                <ButtonLogin>Entrar</ButtonLogin> 
                </ContainerLogin>
                   
            </ContentLogin>
            <ContentText>
                <div style={{justifyContent:'flex-end'}}>
                    <p>
                        No Strateegia você constrói ideias e debate colaborativamente,
                        onde o design intuitivo encontra a transformação estratégica.
                    </p>
                </div>
                <div>
                    <p>
                        Discorra seus tópicos do Trello experimentando uma plataforma 
                        para criar, evoluir e adaptar 
                        projetos e aprendizados 
                        para o futuro.   
                    </p>
                </div>
                 
                <div>
                    <img></img>
                    <p></p>
                </div>
            </ContentText>
                 
        </Container>
    )
}

export default Home

const Container = styled.div` 
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