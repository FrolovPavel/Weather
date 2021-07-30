<template lang="pug">
  include ../../tools/mixins.pug
  +b.search
      +e.INPUT.input(
        type="search"
        v-model="city"
        @keyup.enter="getWeather"
      )
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "w-search",
  data(){
    return {
      city: ''
    }
  },
  methods: {
    ...mapActions([
        'GET_WEATHER'
    ]),
    getWeather() {
      this.GET_WEATHER(this.city)
    }
  }
}
</script>

