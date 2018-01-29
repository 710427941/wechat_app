<template>
  <header class="header">
    <div class="tab-group">
      <flexbox :gutter="0">
        <flexbox-item :span="1/3"><router-link tag="div" to="/index"><i>&#xe634;</i></router-link></flexbox-item>
        <flexbox-item :span="1/3"><router-link tag="div" to="/userList"><i>&#xe6ea;</i></router-link></flexbox-item>
        <flexbox-item :span="1/3"><router-link tag="div" to="/userInfo"><i>&#xe641;</i></router-link></flexbox-item>
      </flexbox>
    </div>
  </header>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    name: 'user-header',
    components: {
      Flexbox, FlexboxItem
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";
  @import "../../assets/less/mixin";

  .header{
    width: 100%;
    .bg-image('../../assets/images/header');
    background-repeat: no-repeat;
    height: 200px;
    background-size: cover;
    .tab-group{
      padding-top: 40px;
      div{
        text-align: center;
        i{
          font-family: strong;
          font-style: normal;
          color: #fff;
          font-size: 32px;
        }
      }
      div.router-link-active i{
        text-shadow: 0 0 30px #fff;
      }

    }
  }
</style>
