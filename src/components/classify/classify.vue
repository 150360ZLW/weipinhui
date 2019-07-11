<template>
    <div class="classify">
      <ClassifyTop></ClassifyTop>
      <Search></Search>
      <LeftNav></LeftNav>
      <RightNav></RightNav>
    </div>
</template>

<script>
import ClassifyTop from './components/classifyTop'
import Search from './components/search'
import LeftNav from './components/leftNav'
import RightNav from './components/rightNav.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    ClassifyTop,
    Search,
    LeftNav,
    RightNav
  }
}
</script>
<style lang="less" scoped>
.classify {
  height: 100%;
  font-size: 0;
}
</style>
