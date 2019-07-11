<template>
 <div v-if="msg[0]">
     <img :src="msg[0].img1">
 </div>
</template>

<script>
import {getJiaJing} from '@/api'
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  },
  async created () {
    this.msg = await getJiaJing()
  }
}
</script>

<style scoped>
    img{
        width:100%;
    }
</style>
