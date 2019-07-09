<template>
    <div class="brandSale">
        <div class="bs-title">
            <img v-lazy="item.titleUrl" alt="" v-for="(item,index) in hotSaleList" :key="index">
        </div>
        <ul v-for="(item,index) in hotSaleList" :key="index" class="brand-content">
            <li v-for="(imgurl,index) in item.imgUrl" :key="index">
                <img v-lazy="imgurl" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
import {getSaleHot} from '@/api/index.js'
export default {
  data () {
    return {
      hotSaleList: []
    }
  },
  async created () {
    this.hotSaleList = await getSaleHot()
  }
}
</script>
<style lang="less" scoped>
.brandSale{
    .bs-title {
        >img {
            width: 100%;
        }
    }
    .brand-content {
        margin-top: -4px;
        display: flex;
        flex-wrap: wrap;
        >li {
            width: calc(100% / 3);
            img {
                width: 100%;
            }
        }
    }
}
</style>
