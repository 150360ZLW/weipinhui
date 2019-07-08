<template>
    <div class="weipinkuaiqiang">
        <img src="https://b.appsimg.com/upload/mst/2019/06/20/7/mst_a25b0366d1f15a41b94b457c6c0c1b71.jpg" alt="">
        <ul class="wpkq_wx">
            <li v-for="(item,index) in kuaiqiang" :key="index">
                <img :src="item.img1" alt="">
                <img :src="item.img2" alt="">
                <span class="a1">快抢价</span>
                <span class="a2">￥{{item.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {getkuaiqiang} from '@/api'
export default {
  async created () {
    this.kuaiqiang = await getkuaiqiang()
  },
  data () {
    return {
      kuaiqiang: []
    }
  },
  mounted () {

  }
}
</script>
<style scoped>
    .weipinkuaiqiang{
        position: relative;
    }
    .weipinkuaiqiang>img{
        width: 100%;
        display: block;
    }
    .wpkq_wx{
        display: flex;
        position: absolute;
        bottom: 15px;
        left: 0;
    }
    .wpkq_wx li{
        font-size: 10px;
        text-align: center;
    }
    .wpkq_wx li img{
        width: 100%;
    }
    .wpkq_wx .a1{
        background: #DE3D96;
        width: 27px;
        height: 12px;
        color: white;
    }
    .wpkq_wx .a2{
        color: #DE3D96;
    }
    .wpkq_wx li img:nth-child(2){
        width: 50%;
        display: block;
        margin: auto;
        padding: 3px 0;
    }
</style>
