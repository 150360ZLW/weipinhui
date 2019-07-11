<template>
 <div>
     <div class="zuihou">
         <ul>
             <router-link tag="li" :to="item.img" v-for="(item, index) in zuihou" :key="index">
                 <img :src="item.img">
             </router-link>
         </ul>
     </div>
 </div>
</template>

<script>
import {getJiazuihou} from '@/api'
export default {
  data () {
    return {
      msg: '',
      zuihou: ''
    }
  },
  methods: {

  },
  async created () {
    this.zuihou = await getJiazuihou()
  }

}
</script>

<style scoped>

    img{width: 100%}
</style>
