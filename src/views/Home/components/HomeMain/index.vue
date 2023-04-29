<template>
    <div class="home-main">
        <HomeWellreceived v-if="tabIndex === 0"/>
        <HomeCinema v-if="tabIndex === 1"/>
    </div>
</template>

<script>
import HomeWellreceived from "./HomeWellreceived.vue";
import HomeCinema from "./HomeCinema.vue";

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
        HomeCinema
    }
};
</script>

<style lang="less" scoped>
.home-main {
    height:calc(100% - 61px - 47px) ;
}
</style>