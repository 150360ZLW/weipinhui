<template>
    <div class="right-wrapper">
        <ul class="right-nav">
            <li v-for="(item,index) in leftNavList" :key="index">
                <img v-lazy="item.imgurl" alt="">
                <span class="sp1">{{item.dongxi}}<br></span>
                <span class="sp2">剩{{item.youhui}}天</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {getgengduotuijian} from '@/api'
export default {
  data () {
    return {
      leftNavList: []
    }
  },
  async created () {
    this.leftNavList = await getgengduotuijian()
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.right-wrapper{
    &::-webkit-scrollbar{
        display: none;
    }
    display: inline-block;
    width: calc(100% - 200px);
    height: calc(100% - 210px);
    overflow-y: auto;
    .right-nav{
        width: 100%;
        position: relative;

        background: #f3f4f5;
        box-sizing: border-box;
        overflow: hidden;
        >li {
            width: 100%;
            line-height: 80px;
            text-align: center;
            box-sizing: border-box;
            >span {
                display: inline-block;
                height: 100%;
                font-size: 24px;
            }
        }
}
}
    .right-nav li img{
        width:100%;
    }
    .right-nav img{
        width: 100%;
        display: block;
    }
    .right-nav .sp1{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 800;
        font-size: 30px;
        width: 78%;
    }
    .right-nav .sp2{
        color: #B7B9BC;
        font-size: 28px;
    }

</style>
