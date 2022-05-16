import { NavigationContainer } from "@react-navigation/native"
import {PokemonProvider} from "../context/ContextData"
import Stack from "./Stack"

export default function() {
    return(
        <NavigationContainer>
            <PokemonProvider>
                <Stack />
            </PokemonProvider>
        </NavigationContainer>
    )
}