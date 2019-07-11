<template>
    <div class="five">
      <ul>
           <li v-for="(five,index) in fiveList" :key="index">
               <img :src="five.fiveimg" alt="">
           </li>
      </ul>
    </div>
</template>
<script>
import {getLiveFive} from '@/api'
export default {
  data () {
    return {
      fiveList: []
    }
  },
  async created () {
    this.fiveList = await getLiveFive()
  }
}
</script>
<style>
.five ul{
   display: flex;
   flex-wrap: wrap;
}
.five ul li img {
    width: 100%;
}
</style>
