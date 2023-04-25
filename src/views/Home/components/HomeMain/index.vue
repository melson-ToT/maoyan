<template>
    <div style="height:100%">
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

</style>