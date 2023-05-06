<template>
    <div>
        <HomeIndex /> 
        <HomeVideo /> 
    </div>
</template>

<script>
import HomeIndex from "./HomeIndex.vue"
import HomeVideo from "./HomeVideo.vue"


export default {
  components:{
    HomeIndex,
    HomeVideo,
   

  }
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: calc(100% - 50px - 49px);
}
</style>