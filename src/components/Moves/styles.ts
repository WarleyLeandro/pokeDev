import styled from "styled-components/native"


export const Container = styled.SafeAreaView`
    flex-direction: column;
    margin-top: 32px;

`

export const List = styled.FlatList`
    margin-left: 20px;
`

export const Item = styled.Text`
    font-size: 16px;
    font-weight: 900;
    line-height: 22px;
    color: #000000;
    margin: 2px 12px;
    
`

export const BoxItem = styled.View`
    justify-content: center;
    background-color: #E0E0E0;
    border-radius: 4px;
    margin-right: 6px;
    margin-bottom: 10px;
`

export const Title = styled.Text`
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    font-style: normal;
    padding-bottom: 6px;
    padding-left: 20px;
    color: #A3A4A6;
`