<template>
    <div class="Logo">
        <img src="../../../../assets/img/1.png" alt="">
        <div>
            <span>发现最新最热电影</span>
            <a href="">打开App</a>
            <span>&nbsp;&nbsp;></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeLogo',

};
</script>

<style lang="less" scoped>
.Logo {
    width: 100%;
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
        width: 94px;
        height: 39px; 
    }
    span {
        font-size: 14px;
    }
    a {
        color: red;
    }
}
</style>