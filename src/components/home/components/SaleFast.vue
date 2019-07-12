<template>
    <div class="sale-fast" >
      <div v-for="sflist in sfList" :key="sflist.id">
        <div class="sf-title">
            <img v-lazy="sflist.titleUrl" alt="">
        </div>
        <ul class="sf-content">
            <li v-for="(imgurl,ind) in sflist.imgsUrl" :key="ind">
                <img :src="imgurl.imgurl" alt="">
                <img :src="imgurl.imgtitle" class="imgtitle" alt="" v-if="imgurl.imgtitle">
                <div>
                  <span v-text="imgurl.yh" class="yh"></span>
                  <span v-text="imgurl.price" :style="{color:sflist.priceColor}"></span>
                </div>
            </li>
        </ul>
      </div>
    </div>
</template>
<script>
import {getSaleFast} from '@/api/index.js'
export default {
  async created () {
    this.sfList = await getSaleFast()
    console.log(this.sfList)
  },
  data () {
    return {
      sfList: []
    }
  }
}
</script>

<style lang="less" scoped>
.sale-fast{
  .sf-title {
    width: 100%;
    >img{
      width: 100%;
    }
  }
  .sf-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    >li {
      width: 25%;
      display: flex;
      flex-direction: column;
      text-align: center;
      .yh {
        font-size: 24px;
        background:rgb(255, 46, 119);
        color:#fff;
        border-radius:10px;
        padding:0 8px;
      }
      >.imgtitle {
        width: 88px;
        height: 44px;
        margin: 0 auto;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
