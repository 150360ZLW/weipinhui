<template>
    <div class="gengduotuijian">
        <p class="np"></p>
        <span class="sp0">新特卖·每天早10晚8点上新</span>
        <div class="gengduotuijian_content" v-for="(item,index) in tuijian" :key="index">
            <img :src="item.imgurl" alt="">
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
    .gengduotuijian .np{
        width: 100%;
        height: 15px;
        background: #F3F4F6;
    }
    .gengduotuijian .sp0{
        display: inline-block;
        width: 100%;
        height: 63.47px;
        background: white;
        line-height: 63.47px;
        text-align: center;
        font-weight:900;
        color: rgb(34, 34, 34);
        font-size: 18px;
    }
    .gengduotuijian{
        background: #F3F4F5;
        overflow: hidden;
    }
    .gengduotuijian_content{
        width: 92%;
        margin: auto;
        background: white;
        border-radius: 15px;
        position: relative;
        margin-bottom: 15px;
    }
    .gengduotuijian_content img{
        width: 100%;
        display: block;

    }
    .gengduotuijian .sp1{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: inline-block;
        font-weight: 800;
        font-size: 15px;
        margin-left: 15px;
        margin-top: 15px;
        width: 78%;
    }
    .gengduotuijian .sp2{
        display: inline-block;
        color: #B7B9BC;
        font-size: 14px;
        position: absolute;
        right: 10px;
        bottom: 35px;
    }
    .gengduotuijian .sp3{
        color: #B7B9BC;
        font-size: 14px;
        margin-left: 15px;
        padding-bottom: 12px;

    }
    .gengduotuijian .sp3 span{
        color: #E66AAE
    }
</style>
