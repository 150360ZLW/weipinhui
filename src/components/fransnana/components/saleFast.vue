<template>
    <div>
        <div class="sale-fast" v-for="(item) in saleFastList" :key="item.id">
            <div class="sf-bg">
                <img :src="item.titleImg" alt="">
            </div>
            <ul class="sf-content">
                <li v-for="imgs in item.imgsurl" :key="imgs.id">
                    <img :src="imgs.mainImg" alt="">
                    <img :src="imgs.smallImg" class="wb-small-img" alt="" v-if="imgs.smallImg">
                    <div class="sf-title">
                        <span v-text="item.text" class="sf-sp1"></span>
                        <span v-text="imgs.price" :style="item.priceColor" class="sf-sp2"></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getWbSaleFast} from '@/api/index.js'
export default {
  data () {
    return {
      saleFastList: []
    }
  },
  async created () {
    this.saleFastList = await getWbSaleFast()
  }
}
</script>

<style lang="less" scoped>
.sale-fast {
    width: 100%;
    height: 250px;
    .sf-bg{
        width: 100%;
        >img{
            width: 100%;
        }
    }
    .sf-content {
        transform: translateY(-120%);
        display: flex;
        width: 100%;
        justify-content: space-around;
        .sf-title{
            .sf-sp1 {
                width: 22px;
                height: 11px;
                font-size: 10px;
                background: rgb(222, 61, 150);
                color: #fff;
                padding: 2px 2px;
            }
            .sf-sp2 {
                font-size: 14px;
            }
        }
        >li{
            width: 20%;
            text-align: center;
            >img {
                width: 100%;
            }
            .wb-small-img {
                width: 44px;
                height: 22px;
            }
        }
    }
}
</style>
