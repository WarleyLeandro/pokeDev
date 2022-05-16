import React, {useState, useEffect} from 'react'
import Header from '../../components/Header'
import {PokemonInfo} from "./interface"

import axios from 'axios'

import HeaderInfo from "../../components/HeaderInfo"
import Abilities from '../../components/Abilities'
import Moves from '../../components/Moves'

import * as S from './styles'

const Info = ({route}) => {

    const [pokemon, setPokemon] = useState([] as PokemonInfo)
    

    const url = route.params.url

    const getPokemonByUrl = (url: string) => {
        axios.get(url)
        .then(({data}) => setPokemon(data))
    }

    useEffect(() => {
        getPokemonByUrl(url)
    }, [])

    const {name, abilities, moves, sprites}: PokemonInfo = pokemon
    console.log()
    return (
        <S.Container>
            <Header name='Detalhes do Pokémon' />

            <HeaderInfo source={sprites?.front_default} name={name}/>

            <Abilities data={abilities}/>

            <Moves data={moves}/>

        </S.Container>
    )
}


export default Info