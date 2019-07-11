<template>
    <div>
       <ul class="six">
           <li v-for="(six) in sixList" :key="six.indx">
             <img v-lazy="six.img">
             <div class="box">
              <p class="p1"><span>{{six.title}}</span><span>{{six.day}}</span></p>
              <p class="p2"><span>{{six.discount}}</span><span>{{six.zhe}}</span></p>
             </div>
           </li>
       </ul>
    </div>
</template>
<script>
import {getLiveSix} from '@/api'
export default {
  data () {
    return {
      sixList: []
    }
  },
  async created () {
    this.sixList = await getLiveSix()
  }
}
</script>
<style scoped lang="less">
.six{
  background: #F3F4F5;
}
.six img{
        display: flex;
        width: 94%;
        margin-left: 2%;
        margin-top: 40px;
        border-radius: 5% 5% 0 0;
}
.six .box{
        width: 94%;
        height: 120px;
        background: #fff;
        border-radius:0 0 6% 6%;
        margin-left: 2%;
        padding-top: 30px;
    .p1 {
       padding-bottom: 16px;
    }
.p1 span:nth-child(1){
        font-size: 30px;
        font-weight: bold;
        font-family: PingFangSC-Regular;
        color: rgb(34, 34, 34);
        margin-left: 4%;
    }
.p1 span:nth-child(2){
        font-size: 24px;
        font-family: PingFangSC-Regular;
        color: rgb(152, 152, 159);
        float: right;
        margin-right: 2%;
    }
    .p2 span:nth-child(1){
        font-size: 26px;
        font-family: PingFangSC-Regular;
        color: rgb(222, 61, 150);
        margin-left: 4%;
    }
     .p2 span:nth-child(2){
        font-size: 26px;
        font-family: PingFangSC-Regular;
        color: rgb(88, 92, 100);
    }
}
</style>
