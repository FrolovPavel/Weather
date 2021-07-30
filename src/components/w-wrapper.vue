<template lang="pug">
  include ../tools/mixins.pug
  div.wrapper
      div.container
          w-search(

          )
          w-location(

          )
          w-weather(

          )


</template>

<script>
import wSearch from './search/w-search.vue'
import wLocation from './location/w-location.vue'
import wWeather from './weather/w-weather.vue'
export default {
  name: "w-wrapper",
  components: {
    wSearch,
    wLocation,
    wWeather
  }
}
</script>
