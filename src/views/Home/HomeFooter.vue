<template>
  <div class="HomeFooter">
    <router-link v-for="(item, index) in tabList" :key="index" 
      :to="'/home'+item.router"
      tag="div">
      <span :class="'iconfont icon-' + item.icon"></span>
      <span>{{item.title}}</span>
    </router-link>
  </div>
</template>

<script>
export default {


  data() {
    return {
        tabList: [
          {
            title: '电影',
            icon: 'dianying',
            router:"/film"
          },
          {
            title: '视频',
            icon: 'shipin',
            router:"/video"
          },
          {
            title: '小影视',
            icon: 'duanshipinhuati',
            router:"/Smallvideo"
          },
          {
            title: '播出',
            icon: '16shipin-1',
            router:"/broadcast"
          },
          {
            title: '我的',
            icon: 'wode',
            router:"/my"
          }
        ],

    };
  },

};
</script>

<style lang="less" scoped>
.HomeFooter {
  background: #fff;
  width: 100%;
  height: 48px;
  border-top: 1px solid black;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  &>div {
    height: 100%;
    width: calc(100% / 5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .iconfont {
        font-size: 20px;
    }
    & span:last-child {
        font-size: 12px;
    }
  }
  .router-link-active {
    color: red;
  }
}
</style>