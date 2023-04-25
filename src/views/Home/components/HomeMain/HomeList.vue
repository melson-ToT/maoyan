<template>
  <div class="home-list">
    <ul>
      <li v-for="item in hotList" :key="item.id">
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
export default {
  name: "HomeList",
  props: ["hotList"],
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.home-list {
  height: calc(100% - 205px);
  ul {
    height: 100%;
    overflow-y: auto;
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