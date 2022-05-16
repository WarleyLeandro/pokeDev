import React from "react"

import * as S from "./styles"

type Abilities = {
    ability?: {
        name: string
    }
}

type Props = {
    data?: Array<Abilities>;
}

const Abilities = ({data} : Props) => {

    function renderItem({item}) {
        return(
            <S.Item> {item?.ability?.name} | </S.Item>
        )
    }

    return(
        <S.Container>

            <S.Title>Habilidades:</S.Title>

            <S.List
                horizontal
                data={data}
                keyExtractor={(item) => item?.ability?.name}
                renderItem={(item) => renderItem(item)}
            />

        </S.Container>
    )
}

export default Abilities