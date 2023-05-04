<template>
  <div class="HomeWellreceived">
    <HomeFavorable />
    <HomeList />
  </div>
</template>

<script>
//引入"纵向滚动"的子组件
import HomeFavorable from "./HomeFavorable.vue";
//引入"横向滚动"的子组件
import HomeList from "./HomeList";
//引入api的index.js文件，作为axios的请

export default {
  name: "HomeWellreceived",

  components: {
    HomeFavorable,
    HomeList,
  },
};
</script>

<style lang="less" scoped>
.HomeWellreceived {
  width: 100%;
  height: 100%;
}
</style>