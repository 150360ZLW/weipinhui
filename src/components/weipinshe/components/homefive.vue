<template>
  <div>
      <ul>
          <router-link tag="li" :to="{path: cate.href}" v-for="(cate,index) in cateLast" :key="index" class="cate">
              <img v-lazy="cate.imgurl" alt="">
              <div class="catenmjh">
              <span class="cateion">{{cate.content}}</span>
              <span class="cateeon">{{cate.timer}}</span>
              <div class="catamiko">
              <span class="cateuon">{{cate.number}}</span>
              <span class="catebnm">{{cate.rebate}}</span>
              </div>
              </div>
          </router-link>
      </ul>
  </div>
</template>

<script>
import {getFicion} from '@/api/'
export default {
  data () {
    return {
      cateLast: [],
      msg: ''
    }
  },
  async created () {
    this.cateLast = await getFicion()
  },
  methods: {

  }
}
</script>

<style scoped lang ="less">
ul {
    width: 100%;
    .cate {
        margin: 0 14px;
         font-family: PingFangSC-Regular;
        >img {
            width: 100%;
        }
       .catenmjh {
            width: 100%;
             background-color: #ffffff;
                font-size: 15px;
            >.cateion{
                width: 86%;
                display: inline-block;
                color: rgb(34, 34, 34);
                font-size: 30px;
                overflow: hidden;
            }
            >.cateeon{
                width: 12%;
                line-height: 1px;
                display: inline-block;
                font-size: 13px;
                text-align: right;
            }
            >.catamiko{
                >.cateuon{
                font-size: 12px;
                color: rgb(222, 61, 150);
                line-height: 1px;
                display: inline-block;
                word-break: nowrap;
                }
                >.catebnm {
                    line-height: 1px;
                    font-size: 12px;
                }
            }
        }

    }
}
</style>
