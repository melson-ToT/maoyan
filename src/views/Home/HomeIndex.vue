<template>
  <div class="father">
    <HomeHeader />
    <HomeLogo />
    <HomeTab @tabChange='tabChange'/>
    <HomeMain :tabIndex="tabIndex"/>
    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeLogo from "./components/HomeLogo.vue";
import HomeTab from "./components/HomeTab.vue";
import HomeMain from "./components/HomeMain";
import HomeFooter from "./components/HomeFooter.vue";
export default {
  name: "HomeIndex",

  data(){
    return {
      tabIndex : 0,
      info: {}
    }
  },

  methods: {
    tabChange(index){
       this.tabIndex = index
       this.info = res
       window.localStorage.setItem('info', JSON.stringify(this.info))

    }
  },

  components: {
    HomeHeader,
    HomeLogo,
    HomeTab,
    HomeMain,
    HomeFooter,
  },
};
</script>

<style lang="less" scoped>
.father {
  width: 100%;
  height: 100%;
 
}
</style>