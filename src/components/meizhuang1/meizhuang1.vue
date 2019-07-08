<template>
    <div class="meizhuang1">
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
    Gengduotuijian
  },
  created () {

  }
}
</script>
<style scoped>
.swiper-pagination-bullet-active{
  background: black;

}

</style>
