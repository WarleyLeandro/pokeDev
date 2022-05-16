import React from 'react'
import {StatusBar} from 'react-native'
import {useNavigation} from "@react-navigation/native"

import { usePokemons } from '../../context/ContextData'

import Header from '../../components/Header'
import Card from '../../components/Card'
import { ItemSeparator } from '../../components/ItemSeparator'



import * as S from './styles'

const Home = () => {

    const navigation = useNavigation()
    const {pokemons}  = usePokemons()


    function renderItem({item}) {
        return(
            <Card name={item.name} onPress={() => navigation.navigate('Info', {name: item.name, url: item.url})}/>
        )
    }

    return(
        <React.Fragment>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'#144FA1'}
            />
            <Header name='Lista de Pokémons'/>

            <S.Container>
                <S.Content
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={(item) => item.name}
                data={pokemons.results}
                renderItem={renderItem}
                />
            </S.Container>
        </React.Fragment>
    )
}

export default Home

