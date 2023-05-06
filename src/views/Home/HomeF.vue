<template>
    <div>
    <HomeHeader />
    <router-view />
    <HomeFooter />
    </div>
</template>

<script>
import HomeHeader from "./HomeHeader.vue"
// import HomeN from "./HomeN/HomeNav.vue"
import HomeFooter from "./HomeFooter.vue"
export default {
    data(){
      return {
        
      }
    },

    components:{
       HomeHeader, 
    //    HomeN,
       HomeFooter,
    }
};
</script>

<style lang="less" scoped>
div {
    width: 100%;
    height: 100%;
}

</style>