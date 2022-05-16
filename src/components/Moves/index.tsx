import React from "react"

import * as S from "./styles"

type Moves = {
    move?: {
        name: string
    }
}

type Props = {
    data?: Array<Moves>;
}

const Moves = ({data} : Props) => {

    function renderItem({item}) {
        return(
            <S.BoxItem>
                <S.Item> {item?.move?.name} </S.Item>
            </S.BoxItem>
        )
    }

    return(
        <S.Container>

            <S.Title>Movimentos:</S.Title>

            <S.List
                numColumns={2}
                data={data}
                keyExtractor={(item) => item?.move?.name}
                renderItem={(item) => renderItem(item)}
            />

        </S.Container>
    )
}

export default Moves