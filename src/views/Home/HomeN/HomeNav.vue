<template>
  <div>
    <HomeIndex />
    <HomeVideo />
    <HomeSmallvideo />
    <HomeBroadcast />
    <HomeMy />
  </div>
</template>

<script>
import HomeIndex from "./HomeIndex.vue";
import HomeVideo from "./HomeVideo.vue";
import HomeSmallvideo from "./HomeSmallvideo.vue";
import HomeBroadcast from "./HomeBroadcast.vue";
import HomeMy from "./HomeMy.vue";

export default {
  components: {
    HomeIndex,
    HomeVideo,
    HomeSmallvideo,
    HomeBroadcast,
    HomeMy,
  },
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: calc(100% - 50px - 49px);
}
</style>