<template>
  <div class="home-list">
    <ul>
      <li v-for="(item,index) in hotList" :key="index">
        <img :src="item.img" alt="" />
        <div class="item">
          <p>{{ item.nm }}</p>
          <span
            >观众评分<i>{{ item.mk }}</i></span
          >
          <span>{{ item.desc }}</span>
          <span>{{ item.showInfo }}</span>
        </div>
        <div class="fixd">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { getHotList } from "@/api";
let bs;
export default {
  name: "HomeList",
  data() {
    return {
      hotList: [],
    };
  },

  mounted() {
    this.getHot();
  },

  methods: {
    getHot() {
      getHotList().then((res) => {
        this.hotList = res.data.data.hot;
        // console.log(this.hotList);
        this.$nextTick(() => {
          //在 mounted(){} 生命周期钩子内，加一个 this.$nextTick(()=>{}) 的方法，将 new BetterScroll缩写的实例对象放入里面
          bs = new BetterScroll(".home-list", {
            observeDOM: true,
            startY: 0,
            scrollY: true,
            scrollX: false,
            click: true,
            pullUpLoad: {
              threshold:0,//距离底部还有0px的时候就触发
            },
          });
          // 监听触底        ,()内的就是一个回调函数
          bs.on("pullingUp", () => {
            console.log("已经拉到底了");
            // 回调函数，()内是监听的事件
            getHotList().then((res) => {
              this.hotList = [...this.hotList, ...res.data.data.hot];
              bs.refresh()//由于有新的数据进来，所以要重新定义高度
            });
          });
          //BetterScroll的实例，必须放置在项目挂载后生命周期钩子内
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home-list {
  width: 100%;
  height: calc(100% - 205px);
  overflow: auto;
  ul {
    // height: 100%;
    // overflow-y: auto;
    overflow: hidden;
    display: inline-flex;
    flex-direction: column;
    li {
      list-style: none;
      display: flex;
      margin-bottom: 10px;
      position: relative;
      img {
        width: 64px;
        height: 90px;
      }
      .item {
        margin-left: 10px;
        width: calc(100% - 74px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          font-size: 14px;
          font-weight: 900;
        }
        span {
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          i {
            color: #faaf00;
            margin-left: 5px;
          }
        }
      }
      .fixd {
        width: 60px;
        height: 30px;
        background: red;
        border-radius: 15px;
        position: absolute;
        right: 15px;
        top: calc(50% - 15px);
        font-size: 16px;
        font-weight: 900;
        text-align: center;
        line-height: 30px;
        color: #fff;
      }
    }
  }
}
</style>