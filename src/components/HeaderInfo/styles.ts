import styled from "styled-components/native"

export const Container = styled.View`
    height: 155px;
    flex-direction: row;
    align-items: center;
`

export const ImgWrapper = styled.View`
    justify-content: center;
    align-items: center;
    
    width: 96px;
    height: 96px;
    border: 1px solid #A3A4A6;
    border-radius: 6px;
    margin-left: 20px;
`

export const Img = styled.ImageBackground`
    height: 100%;
    width: 100%;
`

export const BoxName = styled.View`
    flex-direction: column;
    height: 96px;
    width: 250px;
    
`

export const Title = styled.Text`
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    font-style: normal;
    margin-bottom: 6px;
    padding-left: 13px;
    color: #A3A4A6;
`

export const Name = styled.Text`
    font-size: 24px;
    font-weight: 900;
    padding-left: 13px;
    font-style: normal;

    color: #000000;
`