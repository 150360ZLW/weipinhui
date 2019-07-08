<template>
  <div id="app">
    <topNav></topNav>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/components/home/home.vue'
import topNav from '@/common/topNav.vue'
export default {
  name: 'App',
  components: {
    Home,
    topNav
  }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
i {
  font-style: normal;
  display: inline-block;
}
html,body,#app {
  height: 100%;
}
</style>
