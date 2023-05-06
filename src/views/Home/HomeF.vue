<template>
    <div>
    <HomeHeader />
    <HomeN />
    
    </div>
</template>

<script>
import HomeHeader from "./HomeHeader.vue"
import HomeN from "./HomeN/HomeNav.vue"
export default {
    data(){
      return {
        
      }
    },


    components:{
       HomeHeader, 
       HomeN,
    }
};
</script>

<style lang="less" scoped>
div {
    width: 100%;
    height: 100%;
}

</style>