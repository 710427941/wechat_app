<template>
  <header class="header">
    <div @click="goback">
      <i>&#xe6b7;</i>
    </div>
    <slot name="title"></slot>
    <slot name="icon"></slot>
  </header>
</template>

<script>
export default {
  name: 'base-header',
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";
  @import "../../assets/less/icon";
  .header{
    height: 44px;
    background-color: @bg-4fbb0e;
    width: 100%;
    color: @fff;
    position: fixed;
    z-index: 9;
    h2{
      text-align: center;
      height: 44px;
      line-height: 44px;
      font-size: @font-size-20;
      font-weight: 100;
    }
    i{
      font-family: strong;
      font-size: 24px;
      position: absolute;
      z-index: 2;
      font-style: normal;
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
    }
  }
</style>
