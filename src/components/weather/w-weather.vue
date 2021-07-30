<template lang="pug">
  include ../../tools/mixins.pug
  +b.weather
      +e.temp {{'9°C'}}
      +e.description {{'Ясно'}}
</template>

<script>

export default {
  name: "w-weather"
}
</script>
