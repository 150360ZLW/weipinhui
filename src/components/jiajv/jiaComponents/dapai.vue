<template>
 <div class="shuaxin-wai">
     <div class="shuaxin">
         <img v-if="world[0]" :src="world[0]&&world[0].img1">
     </div>
     <div class="dapai">
         <img v-if="world[1]" :src="world[1]&&world[1].img1">
     </div>
     <div class="chujv">
         <img v-if="world[2]" :src="world[2]&&world[2].img1" alt="">
         <img v-if="world[3]" :src="world[3]&&world[3].img1" alt="">
         <img v-if="world[4]" :src="world[4]&&world[4].img1" alt="">
     </div>
 </div>
</template>

<script>
import {getJiaDaPai} from '@/api'
export default {

  data () {
    return {
      msg: '',
      world: ''
    }
  },
  methods: {

  },
  async created () {
    this.world = await getJiaDaPai()
  }
}
</script>

<style scoped>
    img{width: 100%;}
    .shuaxin{
        width: 100%
    }

    .dapai{
        width: 100%;
        font-size: 0;
        box-sizing:border-box;
    }
    .chujv{
        font-size: 0;
        box-sizing:border-box;
    }
    .chujv img{
        width: 33.333333333%;
        display: inline-block;
    }
</style>
