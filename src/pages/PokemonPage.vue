<template>

  <h1>Who is this Pokemon?</h1>

  <PokemonPicture :pokemonId="pokemon_id" :showPokemon="show_pokemon" />

  <PokemonOptions :options="pokemon_options" :correct_pokemon="pokemon_id" :doShowPokemon="doShowPokemon" :loadComponent="this.loadComponent" />

</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions.js'

export default {
  name: 'PokemonPage',

  components: {
    PokemonPicture,
    PokemonOptions,
  },

  methods: {

    async selectPokemon() {
      this.pokemon_id = this.pokemon_options[Math.floor(Math.random()*this.pokemon_options.length)].id
      console.log(this.pokemon_id);
    },

    doShowPokemon() {
      this.show_pokemon = true
    },

    async loadComponent() {
      this.show_pokemon = false 
      this.pokemon_options = await getPokemonOptions()
      await this.selectPokemon()
    },
  },

  created() {
    this.loadComponent()
  },

  data() {
    return {
      amount_of_options: 4,
      pokemon_id: 0,
      pokemon_options: [],
      show_pokemon: false,
    }
  }
}
</script>

<style>

</style>