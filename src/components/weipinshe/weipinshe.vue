<template>
<div>
    <div class="appliance ">
        <!-- 搜索栏 -->
        <Search></Search>
        <!-- 路由组件 -->
        <topNav></topNav>
        </div>
        <!-- 轮播图 -->
      <Homeone></Homeone>
      <!-- 第二部分 -->
      <Hometwo></Hometwo>
      <!-- 第三部分 -->
      <Homethree></Homethree>
      <!-- 第四部分 -->
      <Homefour></Homefour>
      <!-- 第五部分 -->
      <Homefive></Homefive>
    </div>
</template>
<script>
import Search from '@/common/search'
import TopNav from '@/common/topNav'
import Homeone from './components/homeone.vue'
import Hometwo from './components/hometwo.vue'
import Homethree from './components/homethree.vue'
import Homefour from './components/homefour.vue'
import Homefive from './components/homefive.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    Search,
    TopNav,
    Homeone,
    Hometwo,
    Homethree,
    Homefour,
    Homefive
  }
}
</script>
<style lang="less" scoped>
.appliance {
  margin-top: 150px;
}
</style>
