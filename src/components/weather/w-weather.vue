<template lang="pug">
  include ../../tools/mixins.pug
  +b.weather
      +e.temp {{tempRound}}{{'°C'}}
      +e.description {{description}}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "w-weather",
  props: {
    temp: Number,
    description: String
  },
  computed: {
    ...mapGetters([
        'WEATHER'
    ]),
    tempRound(){
      return Math.round(this.temp)
    }
  }
}
</script>
