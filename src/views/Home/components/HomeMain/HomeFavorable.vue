<template>
  <div class="HomeFavorable">
    <p class="hello">最受好评电影</p>
    <div class="wrapper">
      <ul>
        <li v-for="item in hotList" :key="item.id">
          <img :src="item.img" alt="" />
          <i>观众评分&nbsp;{{ item.mk }}</i>
          <span>{{ item.nm }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: "HomeFavorable",
  props: ["hotList"],
  mounted() {
    //BetterScroll的实例，必须放置在项目挂载后生命周期钩子内
    this.$nextTick(() => {
      //在 mounted(){} 生命周期钩子内，加一个 this.$nextTick(()=>{}) 的方法，将 new BetterScroll缩写的实例对象放入里面
      new BetterScroll(".wrapper", {
        observeDOM: true,
        startX: 0,
        scrollX: true,
        scrollY: false,
        click: true,
      });
    });
  },
  methods: {},
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
  .wrapper {
    width: 100%; //防止页面被撑大
    overflow: hidden; //防止ul大于父元素
    ul {
      // width: 100%;
      //将ul的宽度在css中删除，
      height: 150px;
      display: inline-flex;
      //再将 display: flex ;改为 display: inline-flex;(将块元素的弹性盒子改为内联块状弹性盒子)
      // overflow: auto;
      overflow: hidden;
      //删除 ul的 overflow: auto，改为overflow: hidden;因为用了"better-scroll"，就不用横向的滚动条了
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
          font-style: normal;
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>