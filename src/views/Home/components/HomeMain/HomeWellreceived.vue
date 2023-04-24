<template>
  <div>
    <HomeFavorable :hotList="hotList"/>
    <HomeList :hotList="hotList" />
  </div>
</template>

<script>
import HomeFavorable from "./HomeFavorable.vue";
import HomeList from "./HomeList";
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
        console.log(this.hotList);
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

</style>