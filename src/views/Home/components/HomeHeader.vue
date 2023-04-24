<template>
  <header>
    猫眼电影
    <span class="iconfont icon-caidan"></span>
  </header>
</template>

<script>
export default {
  name: "HomeHeader",
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