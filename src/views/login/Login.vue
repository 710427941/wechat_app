<template>
    <div class="login">
      <img src="../../assets/images/loginbg.jpg">
      <div class="logo">
        <i>&#xe632;</i>
        <h3>WeChat</h3>
      </div>
      <div class="form">
        <input type="text" name="username" v-model="form.username" placeholder="请输入登录账号"/>
        <input type="password" name="password" v-model="form.password" placeholder="请输入登录密码"/>
      </div>
      <div class="btn">
        <button @click="login">登录</button>|<span><router-link to="/register">注册</router-link></span>
      </div>
    </div>
</template>

<script>
import { Toast } from 'vux'
import md5 from 'js-md5'

export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    Toast
  },
  methods: {
    login() {
      if (this.form.username === '' && this.form.password === '') {
        this.$vux.toast.show({
          text: '账号或密码不能为空',
          type: 'text',
          time: 2 * 500
        })
        return
      }
      this.form.password = md5(this.form.password)
      this.$store.dispatch('LoginByUsername', this.form).then(() => {
        this.$router.push({ path: '/index' })
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';
  @import "../../assets/less/icon";
  .login{
    background-color:@bg-4fbb0e;
    width: 100%;
    height: 100%;
    text-align: center;
    img{
      width: 100%;}
    .logo{
      position: absolute;
      top: 20%;
      width: 100%;
      i{
        font-family: 'strong';
        font-size: 80px;
        color: #fff;
        font-style: normal;
      }
      h3{
        font-size: @font-size-24;
        color: #fff;
        font-weight: 100;
        margin-top: 10px;
      }
    }
    .form{
      margin: 2% 16% 0;
      input{
        display: block;
        background-color: transparent;
        border: 0;
        height: 40px;
        width: 100%;
        border-bottom:1px solid #94e067 ;
        margin-bottom: 20px;
        color: @fff;
        font-size: @font-size-16;
      }
      input::-webkit-input-placeholder{
        color: #9dfa6a;
        font-size: @font-size-14;
      }
    }
    .btn{
      position: absolute;
      bottom: 5%;
      left: 0;
      width: 100%;
      text-align: center;
      color: @fff;
      button,span{
        width: 40%;
        text-align: center;
        background-color: transparent;
        border: 0;
        color: @fff;
        font-size: @font-size-16;
        font-weight: 100;
        display: inline-block;
        a{
          text-decoration: none;
          color: @fff;
        }
      }
    }


  }
</style>
