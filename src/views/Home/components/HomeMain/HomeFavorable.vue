<template>
    <div class="HomeFavorable">
        <p class="hello">最受好评电影</p>
        <ul>
            <li v-for="item in hotList" :key="item.id">
               <img :src="item.img" alt="">
               <i>观众评分&nbsp;{{item.mk}}</i>
               <span>{{item.nm}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeFavorable',
    props:["hotList"],
    mounted() {   
    },
    methods: {   
    },
};
</script>

<style lang="less" scoped>
.HomeFavorable {
    width: 100%;
    height: 205px;
    padding: 12px;
    box-sizing: border-box;
    .hello {
        font-size: 14px;
        color: #333;
        margin-bottom: 12px 15px;
    }
    ul {
        width: 100%;
        height: 150px;
        display: flex;
        overflow: auto;
        li {
            width: 85px;
            height: 150px;
            background: #fff;
            list-style: none;
            flex-shrink: 0;
            margin-right: 10px;
            position: relative;
            img {
                width: 85px;
                height: 121px;
                display: block;
            }
            span {
                width: 85px;
                height: 10px;
                font-size: 10px;
                line-height: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            i {
                position: absolute;
                top: 100px;
                left: 5px;
                font-size: 8px;
                color: #faaf00;
                font-weight: 600;
                font-style:normal;
            }
        }
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>