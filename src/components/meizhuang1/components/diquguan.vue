<template>
  <div class="ms">
    <img src="//h2.appsimg.com/a.appsimg.com/upload/flow/2019/07/04/66/15622347090840.jpg"/>
    <!-- 产品 -->
    <div class="mspro">
      <ul class="product">
          <li v-for="(product,index) in productList" :key="index">
              <img v-lazy="product"/>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getBrandList} from '@/api'
export default {
  async created () {
    this.productList = await getBrandList()
  },
  data () {
    return {
      productList: []
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
    .ms {
        .mspro {
          width: 100%;
        }
        img {
            width: 100%;
            display: block;
        }
        .product {
            font-size: 0;
            li{
                width: calc(100%/3);
                display: inline-block;

            }
        }
    }

</style>
