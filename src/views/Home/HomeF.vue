<template>
    <div>
    <HomeHeader />
    <HomeIndex />
    <HomeFooter />
    </div>
</template>

<script>
import HomeHeader from "./HomeHeader.vue"
import HomeIndex from "./HomeIndex.vue"
import HomeFooter from "./HomeFooter.vue"
export default {
    components:{
       HomeHeader, 
       HomeIndex,
       HomeFooter
    }
};
</script>

<style lang="less" scoped>
div {
    width: 100%;
    height: 100%;
}

</style>