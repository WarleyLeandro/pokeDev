export interface PokemonInfo {

    abilities?: Abilities[];
    name?: string;
    moves?: Moves[];
    sprites?: Sprites<Object>
}

export interface Abilities {
    ability?: {
        name: string
    }
}

export interface Moves {
    move?: {
        name: string
    }
}

export interface Sprites<T> {
    front_default: string
}