<template>
    <div>
        <!-- 公共组件 -->
        <Search></Search>
        <TopNav></TopNav>
        <!-- 轮播 -->
        <Carasel></Carasel>
        <!-- 展示图 -->
        <ComptPlay></ComptPlay>
        <!-- 字图banner -->
        <div class="fontbanner">
          <img src="http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/03/12/139/15523562037205.jpg">
        </div>
        <!-- 左轮播 -->
        <Leftslide></Leftslide>
        <!-- 快抢组件 -->
        <Ngrab></Ngrab>
        <!-- 猜你喜欢 -->
        <GuessLike></GuessLike>
        <!-- 唯品国际 -->
        <OnlyProduct></OnlyProduct>
    </div>
</template>
<script>
import Search from '../../common/search.vue'
import TopNav from '../../common/topNav.vue'
import Carasel from './components/carasel.vue'
import ComptPlay from './components/comptPlay.vue'
import Leftslide from './components/leftslide.vue'
import Ngrab from './components/ngrab.vue'
import GuessLike from './components/guessLike.vue'
import OnlyProduct from './components/onlyProduct.vue'
export default {
  components: {
    Search,
    TopNav,
    Carasel,
    ComptPlay,
    Leftslide,
    Ngrab,
    GuessLike,
    OnlyProduct
  },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style scoped>
.fontbanner img {
  width: 100%;
}
</style>
