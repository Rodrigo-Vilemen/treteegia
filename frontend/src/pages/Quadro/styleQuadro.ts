import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.a`
  
 color: black;
 font-size: 2rem;
  
`;
export const ContainerPage = styled.div`
  display:flex;
  background: white;
  width: 100%;
  height: 85vh;
  align-items: center;
  justify-content: center;
`;

export const ContainerQuadros = styled.div`
  display:flex;
  justify-content: space-between;
  width: 90%;
  //background: red;
  height: 100%;
  align-items: center;
`;
export const ContainerQuadro = styled.div`
  display:flex;
  justify-content: center;
  width: 100%;
  
  height: 100%;
  align-items: center;
  flex-direction: column
`;
export const Quadro = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-around;
  background: #8ac2ff;
  width: 90%;
  height: 50%;
  border-radius: 10px;
`;
export const rectangle = styled.div`
  width: 90%;
  background: white;
  height: 10%;
  border-radius: 2px;
  display:flex;
  align-items: center;
  justify-content: center;
`;


