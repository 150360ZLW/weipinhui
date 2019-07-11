<template>
    <div class="cate">
       <ul>
           <li v-for="(cate, index) in cateList" :key="index">
               <img :src="cate.imgurl" alt="">
           </li>
       </ul>
    </div>
</template>
<script>
import {getLiveCate} from '@/api'
export default {
  data () {
    return {
      cateList: []
    }
  },
  async created () {
    this.cateList = await getLiveCate()
  }
}
</script>
<style scoped>
.cate ul{
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
