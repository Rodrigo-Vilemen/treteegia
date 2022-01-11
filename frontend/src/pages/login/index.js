import React from "react";
import * as S from "./styles";
import Botao from "../../components/Button";

function Login() {
  return (
    <S.Container>
      <S.ContentLogin>
        <S.ContainerTextLogin>
          <p>
            <span>Planeje</span>
            <span style={{ marginLeft: "1.5rem" }}>no Trello</span>
          </p>
          <img src="/images/treteegia.png" />
          <p style={{ justifyContent: "" }}>
            <span style={{ textAlign: "end", marginRight: "1.5rem" }}>
              Debata no
            </span>
            <span style={{ textAlign: "end" }}>Strateegia</span>
          </p>
        </S.ContainerTextLogin>
        <S.ContainerLogin>
          <S.InputContainer>
            <label>Login do Trello</label>
            <input type="text" />
          </S.InputContainer>
          <S.InputContainer>
            <label>Senha</label>
            <input type="text" />
          </S.InputContainer>
          <S.ButtonLogin>Entrar</S.ButtonLogin>
        </S.ContainerLogin>
      </S.ContentLogin>
      <S.ContentText>
        <div style={{ justifyContent: "flex-end" }}>
          <p>
            No Strateegia você constrói ideias e debate colaborativamente, onde
            o design intuitivo encontra a transformação estratégica.
          </p>
        </div>
        <div>
          <p>
            Discorra seus tópicos do Trello experimentando uma plataforma para
            criar, evoluir e adaptar projetos e aprendizados para o futuro.
          </p>
        </div>

        <div>
          <img></img>
          <p></p>
        </div>
      </S.ContentText>
    </S.Container>
  );
}

export default Login;
