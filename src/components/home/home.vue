<template>
    <div class="home">
        <!-- 搜索栏 -->
        <Search></Search>
        <!-- 路由组件 -->
        <topNav></topNav>
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
import TopNav from '@/common/topNav'
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
    Search,
    TopNav
  }
}
</script>

<style scoped>
.home{
  margin-top: 160px;
}
</style>
