<template>
    <div>
        <HomeIndex v-if="iconIndex === 0"/> 
    </div>
</template>

<script>
import HomeIndex from "./HomeIndex.vue"

export default {
  props:["iconIndex"],
  components:{
    HomeIndex,

  }
};
</script>

<style lang="less" scoped>

</style>