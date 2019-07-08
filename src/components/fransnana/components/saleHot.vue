<template>
    <div>
        <div v-for="(item, index) in saleHotList" :key="index">
            <div class="title">
                <img v-lazy="item.title" alt="">
            </div>
            <ul class="sh-content">
                <li v-for="(imgurl,ind) in item.imgUrl" :key="ind">
                    <img v-lazy="imgurl" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getWbSaleHot} from '@/api/index.js'
export default {
  data () {
    return {
      saleHotList: []
    }
  },
  async created () {
    this.saleHotList = await getWbSaleHot()
  }
}
</script>

<style lang="less" scoped>
.title {
    width: 100%;
    >img {
        width: 100%;
    }
}
.sh-content {
    display: flex;
    width: 100%;
    >li {
        width: calc(100%/3);
        >img{
            width: 100%;
        }
    }
}
</style>
