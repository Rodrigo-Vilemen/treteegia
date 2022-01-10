import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <p>Copyright© 2021. Desenvolvido por Jéssica, Paulo e Rodrigo durante o Studio 02</p>
        </Container>
    )
}

export default Footer

const Container = styled.footer`
    width: 100%;
    height: 72px;
    position: relative;
    background: #253858;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p {
        color: white;
        line-height: 18px;
        position: absolute;
    }
`