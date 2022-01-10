import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Nav>
            <NavMenu>
                <Logo1  src="/images/strateegia.png" />
                <span>+</span>
                <Logo2 src ="/images/trello.png" />
            </NavMenu>
            <NavLinks>
                <a>
                    <span>Sobre</span>
                </a>
                <a>
                    <span>strateegia</span>
                </a>
            </NavLinks>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`    
    height: 72px;
    position: 'absolute';
    background: #007AFF;
    display:flex;
    align-items: center;
    justify-content: space-between
    
`
const NavMenu = styled.nav`
    display: flex;
    margin-left: 71px;
    span {
        font-size: 30px;
        color: white;
    }
`
const Logo1 = styled.img`
    width: 45px;
    height: 45px;
    align-items: center;
`
const Logo2 = styled.img`
    width: 45px;
    height: 45px;
    align-items: center;
`
const NavLinks = styled.div`
    display: flex;
    margin: 10px;
    margin-right: 71px;
    a{
        display:flex;
        flex-direction: row;
        margin: 10px;
    }
    span {
        font-size: 18px;
        color: white;
        font-weight: bold;
    }
    
`