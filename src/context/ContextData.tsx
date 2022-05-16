import React, {createContext, useContext, useState, useEffect} from "react"
import api from "../services/api"



interface PokContextData {
    pokemons: any;
    getAllPokemons: any;
}

const pokemonsContext = createContext<PokContextData>({} as PokContextData )

export const PokemonProvider: React.FC = ({children}) => {

    const [pokemons, setPokemons] = useState([])

    const getAllPokemons = () => {
        api.get("?limit=40")
        .then(({data}) => setPokemons(data))
    }


    useEffect(()=>{
        getAllPokemons()
    }, [])

    return(
        <pokemonsContext.Provider value={{
            pokemons,
            getAllPokemons
        }}>
            {children}
        </pokemonsContext.Provider>
    )
}

export default pokemonsContext

export function usePokemons() {
    const context = useContext(pokemonsContext)
    const {pokemons, getAllPokemons} = context
    return {pokemons, getAllPokemons}
}