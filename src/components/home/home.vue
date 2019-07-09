<template>
    <div class="home">
        <!-- 搜索栏 -->
        <Search></Search>
        <!-- 分类组件 -->
        <Classify></Classify>
        <!-- 品牌特卖 -->
        <BrandSale></BrandSale>
        <!-- 唯品快抢 -->
        <SaleFast></SaleFast>
        <!-- 今日特卖 -->
        <Promotion></Promotion>
    </div>
</template>

<script>
import Classify from './components/classify'
import BrandSale from './components/brandSale'
import SaleFast from './components/saleFast'
import Promotion from './components/promotion'
import Search from '@/common/search'
export default {
  data () {
    return {

    }
  },
  components: {
    Classify,
    BrandSale,
    SaleFast,
    Promotion,
    Search
  }
}
</script>

<style scoped>
.home{
  margin-top: 160px;
}
</style>
