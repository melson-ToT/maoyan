<template>
    <div class="home-main">
        <HomeWellreceived v-if="tabIndex === 0"/>
    </div>
</template>

<script>
import HomeWellreceived from "./HomeWellreceived.vue";

export default {
    name: 'HomeMain',
    props: ['tabIndex'],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components: {
        HomeWellreceived,
    }
};
</script>

<style lang="less" scoped>
.home-main {
    height:calc(100% - 50px - 61px - 47px - 49px) ;
}
</style>