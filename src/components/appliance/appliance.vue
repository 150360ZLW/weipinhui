<template>
  <div>
    <HomeNav></HomeNav>
    <Advertising></Advertising>
    <Fenlei></Fenlei>
    <Kuaiqiang></Kuaiqiang>
    <Mi></Mi>
    <Zuihuo></Zuihuo>
  </div>
</template>
<script>
import HomeNav from './components/homeNav.vue'
import Advertising from './components/advertising.vue'
import Fenlei from './components/fenlei.vue'
import Kuaiqiang from './components/kuaiqiang.vue'
import Mi from './components/mi.vue'
import Zuihuo from './components/promotion.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    HomeNav,
    Advertising,
    Fenlei,
    Kuaiqiang,
    Mi,
    Zuihuo
  }
}
</script>
<style scoped>
</style>
