<template>
  <div class="cate">
    <ul>
        <router-link tag="li" :to="{path: cate.href}" v-for="(cate,index) in cateLast" :key="index">
            <img v-lazy="cate.imgurl" alt="">
        </router-link>
    </ul>
  </div>
</template>

<script>
import {getNative} from '@/api/'
export default {
  data () {
    return {
      cateLast: [],
      msg: ''
    }
  },
  async created () {
    this.cateLast = await getNative()
  },
  methods: {

  }
}
</script>

<style scoped lang ="less">
.cate ul {
    display: flex;
    li {
        width: 100%/4;
        img {
            width: 100%;
        }
    }
}
</style>
