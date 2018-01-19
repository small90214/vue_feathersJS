<template>
  <div class="hello">
    <h2>Count: {{ count }}</h2>
    <button @click="increase()"> + </button>
    <button @click="decrease()"> - </button>
    <button @click="reset()"> 歸0 </button>
    <br />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import * as types from '../store/mutation_type.js'

export default {
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  },
  watch: {
    count: function () {
      this.updateCount()
    }
  },
  methods: {
    ...mapMutations({
      increase: types.INCREASE,
      decrease: types.DECREASE,
      reset: types.RESET
    }),
    ...mapActions([
      'updateCount',
      'initCount'
    ])
  },
  mounted: function () {
    this.$nextTick(function () {
      this.initCount()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '~variables'

.hello
  margin-top 50px
  a
    color #35495E

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px
</style>
