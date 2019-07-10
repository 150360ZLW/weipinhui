<template>
    <div class="fqyg1_1">
        <span class="sp0">新特卖·每天早10晚8点上新</span>
        <div class="fqyg1_2" v-for="(item,index) in tuijian" :key="index">
            <img v-lazy="item.imgurl" alt="">
            <span class="sp1">{{item.dongxi}}</span>
            <span class="sp2">剩{{item.youhui}}天</span>
            <p class="sp3"><span>{{item.time}}</span>折起</p>
        </div>
    </div>
</template>

<script>
import {getgengduotuijian} from '@/api'
export default {
  async created () {
    this.tuijian = await getgengduotuijian()
  },
  data () {
    return {
      tuijian: []
    }
  },
  mounted () {

  }
}
</script>
<style scoped>
    .fqyg1_1{
        position: relative;
        z-index: 10000
    }
    .fqyg1_1 .sp0{
        display: inline-block;
        width: 100%;
        height: 126.94px;
        background: white;
        line-height: 126.94px;
        text-align: center;
        font-weight:900;
        color: rgb(34, 34, 34);
        font-size: 36px;
    }
    .fqyg1_1{
        background: #F3F4F5;
        overflow: hidden;
    }
    .fqyg1_2{
        width: 92%;
        margin: auto;
        background: white;
        border-radius: 30px;
        position: relative;
        margin-bottom: 30px;
    }
    .fqyg1_2 img{
        width: 100%;
        display: block;

    }
    .fqyg1_1 .sp1{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: inline-block;
        font-weight: 800;
        font-size: 30px;
        margin-left: 30px;
        margin-top: 30px;
        width: 78%;
    }
    .fqyg1_1 .sp2{
        display: inline-block;
        color: #B7B9BC;
        font-size: 28px;
        position: absolute;
        right: 20px;
        bottom: 70px;
    }
    .fqyg1_1 .sp3{
        color: #B7B9BC;
        font-size: 28px;
        margin-left: 30px;
        padding-bottom: 24px;

    }
    .fqyg1_1 .sp3 span{
        color: #E66AAE
    }
</style>
