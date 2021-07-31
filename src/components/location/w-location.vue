<template lang="pug">
  include ../../tools/mixins.pug
  +b.location
      +e.place {{city}}, {{country}}
</template>

<script>
export default {
  name: "w-location",
  props: {
      city: String,
      country: String,
  }
}
</script>

