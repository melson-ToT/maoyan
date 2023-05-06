<template>
  <div>
    <HomeHeader />

    <keep-alive>
        <!-- 缓存标签 -->

      <router-view v-if="$route.meta.requireAlive"/>
    <!-- 这是将5个切换组件的父组件 -->
      <!-- //将需要缓存(页面切换时，保持原来的操作，不会被销毁)的组件，在 <keep-alive>套起来后，加 v-if="$route.meta.requireAlive" -->

    </keep-alive>

    <router-view v-if="!$route.meta.requireAlive"/>
    <!-- //将不需要缓存的组件(兄弟组件)，在 <keep-alive>套起来后，加 v-if="!$route.meta.requireAlive" -->

    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from "./HomeHeader.vue";
// import HomeN from "./HomeN/HomeNav.vue"
import HomeFooter from "./HomeFooter.vue";
export default {
  data() {
    return {};
  },

  components: {
    HomeHeader,
    //    HomeN,
    HomeFooter,
  },
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 100%;
}
</style>