import React from "react"
import {TouchableOpacityProps} from "react-native"

import * as S from "./styles"

import ImgArrow from "../../assets/arrow.png"

type CardProps = TouchableOpacityProps & {
    onPress(): void;
    name: any;
}

const Card = ({name, onPress}: CardProps) => {
    return(
        <S.Container onPress={onPress}>
            <S.Title>
                {name}
            </S.Title>
            <S.IconWrapper>
                <S.Image source={ImgArrow} />
            </S.IconWrapper>
        </S.Container>
    )
}

export default Card;