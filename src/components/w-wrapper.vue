<template lang="pug">
  include ../tools/mixins.pug
  div.wrapper
      div.container
          w-search(

          )
          w-location(
            v-if="checkData"
            :city="DATA.result.name"
            :country="DATA.result.sys.country"
          )
          +b.error(
            v-if="DATA.error.length !== 0"
          ) {{"Ввели город неправильно или такого города не существует"}}
          w-weather(
            v-if="checkData"
            :temp="DATA.result.main.temp"
            :description="DATA.result.weather[0].description"
          )
</template>

<script>
import wSearch from './search/w-search.vue'
import wLocation from './location/w-location.vue'
import wWeather from './weather/w-weather.vue'

import {mapGetters} from 'vuex'


export default {
  name: "w-wrapper",
  components: {
    wSearch,
    wLocation,
    wWeather
  },
  data(){
    return {
      isError: false
    }
  },
  computed: {
    ...mapGetters([
        'DATA'
    ]),
    checkData(){
      return Object.keys(this.DATA.result).length
    }
  }
}
</script>
