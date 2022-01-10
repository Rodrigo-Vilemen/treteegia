import React from 'react';
import styled from 'styled-components';

function Botao() {
    return (
        <Buttonn>
            Entrar
        </Buttonn>
    )
}

export default Botao;

const Buttonn = styled.button`
   width: 168px;
   height: 56px;
   border-radius: 50px;
   background-color: #FFFFFF;
   border: 3px solid #007AFF;
   box-sizing: border-box;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   left: 310px;
   position: absolute;
   top: 600px;
   align-items: center;
   font-size: 32px;
   color: #007AFF;
   cursor: pointer;
    
`
