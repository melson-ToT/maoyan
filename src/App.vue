<template>
  <div id="app">
    <HomeF />
  </div>
</template>

<script>

import HomeF from './views/Home/HomeF.vue'

export default {
  components:{
    HomeF
  }
}
</script>


<style lang="less" scoped>
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
