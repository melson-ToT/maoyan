<template>
    <div>
        这是我的页面
    </div>
</template>

<script>
export default {

    data() {
        return {
            
        };
    },

    created(){
      if(!localStorage.getItem("token")){
        this.$router.push("/login")
      }
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>

</style>