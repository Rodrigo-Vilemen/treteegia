import React from "react";
import * as S from "./styles";

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
            <label>Login do Trello:</label>
            <input type="text" />
          </S.InputContainer>

          <S.InputContainer>
            <label>Senha:</label>
            <input type="password" />
          </S.InputContainer>
          
          <S.ButtonLogin>Entrar</S.ButtonLogin>

        </S.ContainerLogin>
      </S.ContentLogin>
      <S.ContentText>
        <div style={{ justifyContent: "flex-end" }}>
          <p>
            No Strateegia você <span style={{color: '#1568B0'}}>constrói</span> ideias e <span style={{color: '#5B319E'}}>debate</span> colaborativamente, onde
            o <span style={{color: '#EF6C00'}}>design</span> intuitivo encontra a transformação <span style={{color: '#E1005E'}}>estratégica</span>.
          </p>
        </div>
        <div>
          <p>
            Discorra seus tópicos do Trello experimentando uma plataforma para
            <span style={{color: '#007AFF'}}> criar</span>, <span style={{color: '#CD3CB5'}}>evoluir</span> e <span style={{color: '#5B319E'}}>adaptar</span> projetos e aprendizados para o <span style={{color: '#CD3CB5'}}>evoluir</span> e <span style={{color: '#FDB400'}}>futuro</span>.
          </p>
        </div>

        <div style={{ justifyContent: "center" }}>
          {/* <img style={}src="../../../public/images/strateegiaAmarelo.png" alt="strateegia"/> */}
          <p>Crie Sua Jornada no strateegia</p>
        </div>
      </S.ContentText>
    </S.Container>
  );
}

export default Login;
