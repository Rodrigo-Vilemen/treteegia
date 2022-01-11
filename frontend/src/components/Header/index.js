import React from "react";
import * as S from "./styles";

function Header() {
  return (
    <S.Nav>
      <S.NavMenu>
        <S.Logo1 src="/images/strateegia.png" />
        <span>+</span>
        <S.Logo2 src="/images/trello.png" />
      </S.NavMenu>
      <S.NavLinks>
        <a>
          <span>Sobre</span>
        </a>
        <a>
          <span>strateegia</span>
        </a>
      </S.NavLinks>
    </S.Nav>
  );
}

export default Header;
