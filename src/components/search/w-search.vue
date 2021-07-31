<template lang="pug">
  include ../../tools/mixins.pug
  +b.search
      +e.INPUT.input(
        type="search"
        v-model="city"
        @keyup.enter="getData($event)"
        placeholder="Введите город..."
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
        'GET_DATA'
    ]),
    getData(e) {
      this.GET_DATA(this.city)
      this.$emit('getData')
      e.target.blur();
    }
  }
}
</script>

