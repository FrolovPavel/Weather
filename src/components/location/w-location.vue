<template lang="pug">
  include ../../tools/mixins.pug
  +b.location
      +e.place {{"Волгоград"}}, {{"RU"}}
</template>

<script>
export default {
  name: "w-location"
}
</script>

