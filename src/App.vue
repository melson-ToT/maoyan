<template>
  <div id="app">
    <router-view />
    <HomeFooter />
  </div>
</template>


<script>

import HomeFooter from "./views/HomeFooter.vue"
export default {
  data(){
    return {
    }
  },
    components:{
       HomeFooter,
    },


};
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
