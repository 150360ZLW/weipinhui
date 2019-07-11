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
import {getCataer} from '@/api/'
export default {
  data () {
    return {
      cateLast: [],
      msg: ''
    }
  },
  async created () {
    this.cateLast = await getCataer()
  },
  methods: {

  }
}
</script>

<style scoped lang ="less">
.cate ul {
    display: flex;
    li {
        width: 100%/3;
        img {
            width: 100%;
        }
    }
}
</style>
