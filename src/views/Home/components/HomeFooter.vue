<template>
  <div class="HomeFooter">
    <div v-for="(item, index) in tabList" :key="index" :style="{color: iconIndex === index ? 'blue' : ''}" @click="tabHandle(index, item.router)">
      <span :class="'iconfont icon-' + item.icon"></span>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFooter",

  data() {
    return {
        tabList: [
          {
            title: '电影',
            icon: 'dianying',
            router: '/dian' 
          },
          {
            title: '视频',
            icon: 'shipin',
            router: '/shi'
          },
          {
            title: '小影视',
            icon: 'duanshipinhuati',
            router: '/xiao'
          },
          {
            title: '播出',
            icon: '16shipin-1',
            router: '/bo'
          },
          {
            title: '我的',
            icon: 'wode',
            router: '/wo'
          }
        ],
        iconIndex: 0
    };
  },

  mounted() {},

  methods: {
    tabHandle(index, router) {
      this.iconIndex = index;
    //   this.$router.push(router)
    }
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
}
</style>