<template>
 <div class="dingbu">
   <Search></Search>
   <TopNav></TopNav>
   <Search></Search>
   <TopNav></TopNav>
   <lunbo></lunbo>
   <jingzhi></jingzhi>
   <mufenlei></mufenlei>
   <kuaiqing></kuaiqing>
   <zuihou></zuihou>
   <koubei></koubei>
   <dapai></dapai>
   <div class="dmeo">
     <ul>
       <li class="gao" v-for="(item,index) in list" :key="index">
         <zhuanchan v-if="item.img1" ref="index" :name='item'></zhuanchan>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
import Search from '@/common/search'
import TopNav from '@/common/topNav'
import lunbo from './jiaComponents/lunbo'
import jingzhi from './jiaComponents/jingzhi'
import mufenlei from './jiaComponents/mufenlei'
import kuaiqing from './jiaComponents/kuaiqiang'
import zuihou from './jiaComponents/zuihou'
import koubei from './jiaComponents/koubei'
import dapai from './jiaComponents/dapai'
import zhuanchan from './jiaComponents/zhuanchan'
import {getJiaXunHuan} from '@/api'
export default {
  data () {
    return {
      msg: '',
      list: []

    }
  },

  components: {
    lunbo,
    jingzhi,
    mufenlei,
    kuaiqing,
    zuihou,
    koubei,
    dapai,
    zhuanchan,
    Search,
    TopNav
  },
  async created () {
    this.list = await getJiaXunHuan()
  }
}
</script>

<style scoped>
  .dmeo{
    background:rgb(232, 233, 235);
  }
  .gao div:nth-child(1){
    margin-top:0;
    padding-top:20px;
  }
  .dingbu{
    margin-top: 2.133333rem;
  }
</style>
