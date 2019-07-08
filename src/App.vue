<template>
  <div id="app">
    <!-- <Search></Search> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/components/home/home.vue'
export default {
  name: 'App',
  components: {
    Home
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
