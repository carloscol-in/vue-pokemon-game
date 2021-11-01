<template>
  <div class="options-container">
    <ul>
      <li v-for="option in options" :key="option.id" @click="this.checkOption(option.id)" disabled >{{ option.name }}</li>
    </ul>
  </div>

  <div v-show="selected_answer">
    <p v-if="correct_answer">Correct</p>
    <p v-else-if="!correct_answer">Incorrect</p>

    <button @click="reloadComponent">Next</button>
  </div>
</template>

<script>
export default {

  name: 'PokemonOptions',

  props: {
    options: {
      type: Array,
      required: true
    },
    correct_pokemon: {
      type: Number,
      required: true
    },
    doShowPokemon: {
      type: Function,
      required: true
    },
    loadComponent: {
      type: Function,
      required: true
    }
  },

  methods: {

    checkOption(id) {
      if ( this.selected_answer ) return
      if ( id === this.correct_pokemon ) {
        this.correct_answer = true
        this.doShowPokemon()
      }
      this.selected_answer = true
    },

    reloadComponent() {
      this.correct_answer = false
      this.selected_answer = false
      this.loadComponent()
    }

  },

  created() {
    this.correct_answer = false
    this.selected_answer = false
  },

  data() {
    return {

      selected_answer: false,
      correct_answer: false

    }
  }

}
</script>

<style scoped>

ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}

</style>