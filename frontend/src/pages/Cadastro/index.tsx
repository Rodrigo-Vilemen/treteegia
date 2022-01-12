import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import * as S from './styleCadastro';

const Cadastro = ({}) => {
  return (
    <S.Container>
      <Header />
        <S.Main>
          <S.ContentCadastro>
            <form style={{
                  width:"50%", 
                  padding:"1.5rem", 
                  display:"flex", 
                  flexDirection: "column", 
                  justifyContent:"center",
                  alignItems:"center"
            }}>
              <S.TitleText>Para continuar, lhe redirecionaremos até sua conta do Strateegia:</S.TitleText>
              <S.ContainerInput>
                <label htmlFor="login">Login do Strateegia</label>
                <input type="text" id='login'/>
              </S.ContainerInput>
              <S.ContainerInput>
                <label htmlFor="senha">Senha</label>
                <input type="password" id='senha'/>
              </S.ContainerInput>
              <S.BtnSuccess>Entrar</S.BtnSuccess>
            </form>
            <form style={{
                  width:"50%", 
                  padding:"1.5rem", 
                  display:"flex", 
                  flexDirection: "column", 
                  justifyContent:"center",
                  alignItems:"center"}}>
              <S.TitleText style={{paddingBottom:"0"}}>Não tem uma conta?</S.TitleText>
              <S.TitleText>Crie agora!</S.TitleText>
              <S.ContainerInput>
                <label htmlFor="login">Nome</label>
                <input type="text" id='login'/>
              </S.ContainerInput>
              <S.ContainerInput>
                <label htmlFor="email">Email</label>
                <input type="email" id='email'/>
              </S.ContainerInput>
              <S.ContainerInput>
                <label htmlFor="senha">Senha</label>
                <input type="password" id='senha'/>
              </S.ContainerInput>
              <S.ContainerInput>
                <label htmlFor="senha">Confirmar Senha</label>
                <input type="password" id='senha'/>
              </S.ContainerInput>
              <S.checkbox>
                <input type="checkbox" id='confirm' />
                <label htmlFor="confirm">Li e aceito os Termos</label>
              </S.checkbox>
              <S.BtnSuccess>Criar Conta</S.BtnSuccess>
            </form>
          </S.ContentCadastro>
        </S.Main>
      <Footer />
    </S.Container>
  );
};

export default Cadastro;
