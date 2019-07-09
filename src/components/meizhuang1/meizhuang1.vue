<template>
    <div class="meizhuang1">
      <Search class="search"></Search>
      <TopNav></TopNav>
      <!-- 轮播 -->
      <Lunbo></Lunbo>
      <!-- 分类导航 -->
      <Fenleidaohang></Fenleidaohang>
      <!-- 地区馆 -->
      <Diquguan></Diquguan>
      <!-- 唯品快抢 -->
      <Weipinkuaiqiang></Weipinkuaiqiang>
      <!-- 猜你喜欢 -->
      <Cainixihuan></Cainixihuan>
      <!-- 更多推荐 -->
      <Gengduotuijian></Gengduotuijian>
    </div>
</template>
<script>
import Lunbo from './components/lunbo.vue'
import Fenleidaohang from './components/fenleidaohang.vue'
import Diquguan from './components/diquguan.vue'
import Weipinkuaiqiang from './components/weipinkuaiqiang.vue'
import Cainixihuan from './components/cainixihuan.vue'
import Gengduotuijian from './components/gengduotuijian.vue'
import Search from '@/common/search'
import TopNav from '@/common/topNav'
export default {
  data () {
    return {

    }
  },
  components: {
    Lunbo,
    Fenleidaohang,
    Diquguan,
    Weipinkuaiqiang,
    Cainixihuan,
    Gengduotuijian,
    Search,
    TopNav
  },
  created () {

  }
}
</script>
<style lang="less" scoped>
.swiper-pagination-bullet-active{
  background: black;
}
.meizhuang1{
  margin-top: 160px;
}

</style>
