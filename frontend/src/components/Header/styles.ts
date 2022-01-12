import styled from 'styled-components'

export const Nav = styled.nav`  
    width: 100%;
    height: 72px;
    position: 'absolute';
    background: #007AFF;
    display:flex;
    align-items: center;
    justify-content: space-between;
`

export const NavMenu = styled.nav`
    display: flex;
    margin-left: 71px;
    span {
        font-size: 30px;
        color: white;
    }
`

export const Logo1 = styled.img`
    width: 45px;
    height: 45px;
    align-items: center;
`

export const Logo2 = styled.img`
    width: 45px;
    height: 45px;
    align-items: center;
`

export const NavLinks = styled.div`
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