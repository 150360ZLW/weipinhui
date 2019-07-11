<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
