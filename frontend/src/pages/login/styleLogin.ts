import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - (72px * 2));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 144px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentLogin = styled.div`
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
  div {
    width: 90%;
    min-width: 10rem;
    display: flex;
    justify-content: flex-start;
  }

  p {
    width: 100%;
    max-width: 15rem;
  }
`;

export const ContainerTextLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  p {
    width: 100%;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContainerLogin = styled.div`
  width: 100%;
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
  label {
    width: 100%;
    margin: 5px;
  }

  input {
    width: 100%;
    border-radius: 0.4rem;
    /* margin: 5px */
  }
`;

export const ButtonLogin = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 50px;
  background-color: #ffffff;
  border: 3px solid #007aff;
  margin: 1rem;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* left: 310px; */
  /* position: absolute; */
  /* top: 600px; */
  /* align-items: center; */
  font-size: 32px;
  color: #007aff;
  cursor: pointer;
`;

export const Content = styled.div`
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
    border: 3px solid #c4c4c4;
    background: #ffffff;
    outline: none;
  }
`;
