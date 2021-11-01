const getPokemons = () => {

    const pokemonsArr = []
}

const getRandomArray = async (count) => {
    return Array.from({length: 4}, () => Math.floor(Math.random() * count))
}

const getPokemonOptions = async () => {
    let result = await fetch(`https://pokeapi.co/api/v2/pokedex/national/`)
        .then((res) => res.json())

    let options_array = await getRandomArray(result.pokemon_entries.length)

    return options_array.map((option) => {
        let pokemon = result.pokemon_entries[ option ]
        return {
            id: pokemon.entry_number,
            name: pokemon.pokemon_species.name
        }
    })
}

export default getPokemonOptions