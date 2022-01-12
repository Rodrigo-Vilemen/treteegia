import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 144px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentCadastro = styled.div`
  width: 90%;
  max-width: 920px;
  display: flex;
  flex-direction: row;
  background: #E2E0E0;
  border-radius: 20px;
`;

export const TitleText = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  width: 100%;
  padding: 0 0 1.5rem;
`;

export const ContainerInput = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  label{
    font-size: 1rem;
    font-weight: 500;
  }

  input{
    width: 100%;
    padding: 0.3rem 1rem;
    outline: none;
  }
`;

export const BtnSuccess = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.3rem;

  padding: 0.3rem 2rem;
  border-radius: 0.6rem;

  font-weight: bold;
  background: #DDFFF8;
  border: 2px solid #007AFF;
`;

export const checkbox = styled.div`
  margin-top: 0.6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  label{
    
  }
  input{
    width:1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;