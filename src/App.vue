<template>
  <div id="app">
    <HomeIndex />
  </div>
</template>

<script>

import HomeIndex from '@/views/Home/HomeIndex'
export default {
  components:{
    HomeIndex
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
