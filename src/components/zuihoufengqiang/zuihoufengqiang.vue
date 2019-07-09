<template>
    <div>
      <Yetou></Yetou>
      <TopNav></TopNav>
      <Router></Router>
    </div>
</template>
<script>
import Yetou from './components/yetou.vue'
import Router from './components/router.vue'
import TopNav from '@/common/topNav'
export default {
  data () {
    return {

    }
  },
  created () {

  },
  components: {
    Yetou,
    Router,
    TopNav
  }
}
</script>
<style scoped>
</style>
