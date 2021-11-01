<template>

  <h1>Who is this Pokemon?</h1>

  <PokemonPicture :pokemonId="pokemon_id" :showPokemon="true" />

  <PokemonOptions />

</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemon_id: 4,
    }
  }
}
</script>

<style>

</style>