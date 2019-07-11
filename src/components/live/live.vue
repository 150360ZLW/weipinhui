<template>
    <div>
      <Search></Search>
      <TopNav></TopNav>
      <div class="qblife">
        <LiveBan></LiveBan>
        <!-- 轮播图 -->
        <Carasel></Carasel>
        <!-- 分类导航  -->
        <LiveCate></LiveCate>
        <!-- 第三部分 -->
        <LiveThree></LiveThree>
        <!-- 第四部分 -->
        <LiveFour></LiveFour>
        <!-- 第五部分 -->
        <LiveFive></LiveFive>
        <!-- 第六部分重复的 -->
        <LiveSix></LiveSix>
      </div>
    </div>
</template>

<script>
import LiveBan from './components/liveban.vue'
import Carasel from './components/carasel.vue'
import LiveCate from './components/livecate.vue'
import LiveThree from './components/livethree.vue'
import LiveFour from './components/livefour.vue'
import LiveFive from './components/livefive.vue'
import LiveSix from './components/livesix.vue'
import Search from '@/common/Search'
import TopNav from '@/common/topNav'
export default {
  data () {
    return {

    }
  },
  created () {

  },
  components: {
    Search,
    TopNav,
    LiveBan,
    Carasel,
    LiveCate,
    LiveThree,
    LiveFour,
    LiveFive,
    LiveSix
  }
}
</script>

<style scoped>
  .qblife{
    margin-top: 166px;
  }
</style>
