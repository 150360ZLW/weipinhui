<template>
  <div class="cate">
    <ul>
      <li v-for="(cate,index) in cateList" :key="index">
        <img v-lazy="cate">
      </li>
    </ul>
  </div>
</template>
<script>
import { getFenlei } from '@/api'
export default {
  data () {
    return {
      cateList: []
    }
  },
  async created () {
    this.cateList = await getFenlei()
  }
}

</script>
<style scoped>
.cate ul {
  display: flex;
  flex-wrap: wrap;
}
.cate ul li {
  width: 20%;
}

.cate ul li img {
  width: 100%;
}
</style>
