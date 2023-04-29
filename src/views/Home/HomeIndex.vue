<template>
  <div class="father">
    <HomeLogo />
    <HomeTab @tabChange='tabChange'/>
    <HomeMain :tabIndex="tabIndex"/>
  </div>
</template>

<script>
import HomeLogo from "./components/HomeLogo.vue";
import HomeTab from "./components/HomeTab.vue";
import HomeMain from "./components/HomeMain";
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
    HomeLogo,
    HomeTab,
    HomeMain,
  },
};
</script>

<style lang="less" scoped>
.father {
  width: 100%;
  height: calc(100% - 49px - 50px);
}
</style>