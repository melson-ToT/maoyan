<template>
  <div>222222</div>
</template>

<script>
import { getHotList } from "@/api";
export default {
  name: "HomeCinema",

  data() {
    return {
        Cinemas:[]
    };
  },
  created(){
    this.getHot()
  },
  mounted() {},

  methods: {
    getHot() {
      getHotList().then((res) => {
        this.hotList = res.data.data.hot;
        console.log(this.hotList);
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>