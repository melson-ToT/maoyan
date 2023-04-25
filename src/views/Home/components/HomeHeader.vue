<template>
  <header>
    猫眼电影 
    <span class="iconfont icon-caidan"></span>
    <!-- <button @click="changeName">点击改名</button>
    <button @click="changeAmount">点击金额</button> -->
  </header>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
 
export default {
  name: "HomeHeader",
  data() {
    return {
      name: '小黄',
    };
  },
  computed: {
    ...mapState({
      info: state => state.info
    })
  },
  methods: {
    ...mapMutations({
      changeUserName: 'changeUserName'
    }),
    ...mapActions({
      getAmount: 'getAmount'
    }),
    changeName() {
      console.log(123, this);
      // this.$store.commit('changeUserName',this.name)
      this.changeUserName(this.name)
    },
    changeAmount() {
      this.getAmount()
    }
  }
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 50px;
  background: #e54847;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #fff;
  position: relative;

  .iconfont {
    position: absolute;
    top: calc(100% - 24px) / 2;
    right: 15px;
    font-size: 24px;
  }
}
</style>