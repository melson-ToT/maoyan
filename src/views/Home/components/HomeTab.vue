<template>
  <div class="Tab">
    <span class="uspan">杭州</span>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="item"
        :class="{ active: activeindex === index }"
        @click="tabHandle(index)"
      >
        <span class="topspan">{{ item }}</span>
      </li>
    </ul>
    <span class="iconfont icon-sousuo"></span>
  </div>
</template>

<script>
export default {
  name: "HomeTab",

  data() {
    return {
      list: ["热影", "影院", "待影", "经典电影"],
      activeindex:0
    };
  },
  mounted() {},

  methods: {
    tabHandle(index) {
      this.activeindex = index;
      this.$emit('tabChange', index);
    },
  },
};
</script>

<style lang="less" scoped>
.Tab {
  width: 100%;
  height: 46px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  .uspan {
    height: 100%;
    width: 62px;
    font-size: 20px;
    text-align: center;
    line-height: 46px;
  }
  ul {
    width: calc(100% - 124px);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      list-style: none;
      .topspan {
        font-size: 14px;
      }
    }
    .active {
      font-weight: 900;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 24px;
        left: calc((100% - 20px) / 2);
        width: 20px;
        height: 4px;
        background: red;
        border-radius: 2px;
      }
      .topspan {
        font-size: 15px;
      }
    }
  }
  .iconfont {
    width: 62px;
    height: 100%;
    font-size: 20px;
    text-align: center;
    line-height: 46px;
  }
}
</style>