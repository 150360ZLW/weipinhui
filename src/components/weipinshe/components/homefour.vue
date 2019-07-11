<template>
  <div  class="cate">
      <img v-lazy="cateLast[0]" alt="">
  </div>
</template>

<script>
import {getLiction} from '@/api/'
export default {
  data () {
    return {
      cateLast: [],
      msg: ''
    }
  },
  async created () {
    this.cateLast = await getLiction()
  },
  methods: {

  }
}
</script>

<style scoped lang ="less">
   .cate {
        img {
            width: 100%;
        }
    }
</style>
