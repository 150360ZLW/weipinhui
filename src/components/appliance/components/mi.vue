<template>
  <div class="box1">
    <img v-for="(listi,intes) in boxlist" :key="intes" v-lazy="listi">
    <div class="box2">
      <img v-for="(list,intex) in imglist " :key=intex v-lazy="list">
    </div>
    <img src="http://127.0.0.1:3000/images/appliance/qijian/7.jpg">
  </div>
</template>
<script>
import { getTmi1, getTmi2 } from '@/api'

export default {
  data () {
    return {
      boxlist: [],
      imglist: []
    }
  },
  async created () {
    this.boxlist = await getTmi1()
    this.imglist = await getTmi2()
  }
}
</script>
<style scoped>
.box1 {
  margin-top: 4.4rem
}
.box1 > img {
  width: 100%;
}
.box2 {
  width: 100%;
}
.box2 img {
  width: 24%;
}
</style>
