<template>
    <div class="classify">
      <ClassifyTop></ClassifyTop>
      <Search></Search>
      <LeftNav></LeftNav>
    </div>
</template>

<script>
import ClassifyTop from './components/classifyTop'
import Search from './components/search'
import LeftNav from './components/leftNav'
export default {
  data () {
    return {

    }
  },
  components: {
    ClassifyTop,
    Search,
    LeftNav
  }
}
</script>
<style lang="less" scoped>
.classify {
  height: 100%;
}
</style>
