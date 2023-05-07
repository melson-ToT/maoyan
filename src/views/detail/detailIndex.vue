<template>
    <div>
        <!-- 如果list存在，则显示 list的div-->
        <div v-if="list">
          <div>这是详情的页面--{{id}}</div>
          <p>{{list.nm}}</p>
          <!-- 此时不需要用v-for来遍历了，因为我们已经把id带进来了 -->
          <img :src="list.img | formatUrl" alt=""> 
          <!-- 必须加 | formatUrl的方法，然后在<script>写 -->
        </div>
        <!-- 否则显示：<div v-else>loading...</div>-->
        <div v-else>loading...</div>
    </div>
</template>

<script>


import { getHotList } from "@/api";//在"api"文件中引入对应的方法

export default {
    props:["id"],//接受id
    data(){
        return {
            list:{} //对象的类型
        }
    },
    mounted(){
      this.getData()
    },
    filters:{ //图片不能直接显示
        formatUrl(val){
          return val && val.split("/w.h").join("/200.300")
                // 如果val存在，则才会有：val.split("/w.h").join("/200.300")
        }
    },
    methods:{
        async getData(){ //异步转同步
            const res = await getHotList({id:this.id})//将传入的id = 马上使用的id
            this.list = res.data.data.not //此时res.data.data.not是一个对象，所以，list要用对象的形式来接受
        }
    }
};
</script>

<style scoped>

</style>