<template>
    <div>
        <HomeIndex v-if="iconIndex === 0"/> 
        <HomeMy v-if="iconIndex === 4"/>
    </div>
</template>

<script>
import HomeIndex from "./HomeIndex.vue"
import HomeMy from "./HomeMy.vue"

export default {
  props:["iconIndex"],
  components:{
    HomeIndex,
    HomeMy,

  }
};
</script>

<style lang="less" scoped>

</style>