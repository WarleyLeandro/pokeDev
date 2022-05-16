import React from "react"

import * as S from "./styles"

type Props = {
    source?: string;
    name?: string;
}

const HeaderInfo = ({source, name} : Props) => {
    return(
        <S.Container>

            <S.ImgWrapper>
                <S.Img source={{uri: source}}/>
            </S.ImgWrapper>

            <S.BoxName>
                <S.Title> Nome: </S.Title>
                <S.Name> {name} </S.Name>
            </S.BoxName>

        </S.Container>
    )
}

export default HeaderInfo