import React from "react";

import * as S from './styles'

type HeaderProps = {
    name: string;
}

const Header = ({name} : HeaderProps) => {
    return(
        <S.Container>
            <S.Title> {name} </S.Title>
        </S.Container>
    )
}

export default Header