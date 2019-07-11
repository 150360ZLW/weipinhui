<template>
 <div>
     <div>
         <div class="koubei-top"><img v-if="world[0]" :src="world[0]&&world[0].img1" alt=""></div>
         <div class="koubei-bao"><img v-if="world[1]" :src="world[1]&&world[1].img1" alt=""></div>
         <div class="koubei-kang">
             <div><img v-if="world[2]" :src="world[2]&&world[2].img1" alt=""></div>
             <div>
                 <p><img v-if="world[3]" :src="world[3]&&world[3].img1" alt=""></p>
                 <p><img v-if="world[4]" :src="world[4]&&world[4].img1" alt=""></p>
             </div>
         </div>
     </div>
 </div>
</template>

<script>
import {getKouBei} from '@/api'
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
    this.world = await getKouBei()
  }
}
</script>

<style scoped>
    .koubei-top,.koubei-top img,.koubei-bao,.koubei-bao img{
        width: 100%;
    }
    .koubei-kang>div{
        display: inline-block;
        width: 49%;
    }
    .koubei-kang>div>img{
        width: 100%;
    }
    .koubei-kang>div>p>img{
        width: 100%;
    }
</style>
