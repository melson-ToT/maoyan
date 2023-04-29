<template>
  <div id="app">
    <HomeHeader />
    <HomeIndex />
    <HomeFooter />
  </div>
</template>

<script>

import HomeIndex from './views/Home/HomeIndex.vue'
import HomeFooter from "./views/Home/HomeFooter.vue"
import HomeHeader from "./views/Home/HomeHeader.vue"
export default {
  components:{
    HomeHeader,
    HomeIndex,
    HomeFooter,
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
