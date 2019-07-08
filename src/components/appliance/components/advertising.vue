<template>
  <div class="box">
    <img v-for="(list,index) in List" :key="index" v-lazy="list">
  </div>
</template>
<script>
import { getCallphone } from '@/api/index.js'
export default {
  data () {
    return {
      List: [
      ]
    }
  },
  async created () {
    this.List = await getCallphone()
  }
}
</script>
<style scoped>
.box {
  margin-top: -4px;
}
.box img {
  width: calc(100% / 3);
}
</style>
