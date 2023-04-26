<template>
  <div class="HomeWellreceived">
    <HomeFavorable :hotList="hotList"/>
    <HomeList :hotList="hotList" />
  </div>
</template>

<script>
//引入"纵向滚动"的子组件
import HomeFavorable from "./HomeFavorable.vue";
//引入"横向滚动"的子组件
import HomeList from "./HomeList";
//引入api的index.js文件，作为axios的请求
import { getHotList } from "@/api";
export default {
  name: "HomeWellreceived",

  data() {
    return {
      hotList: [],
    };
  },

  created() {
    this.getHot();
  },

  methods: {
    getHot() {
      getHotList().then((res) => {
        this.hotList = res.data.data.hot;
        // console.log(this.hotList);
      });
    },
  },
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