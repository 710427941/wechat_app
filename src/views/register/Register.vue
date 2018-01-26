<template>
    <div>
      <base-header>
        <h2 slot="title">注册</h2>
      </base-header>
      <div class="register">
        <div class="input">
          <input type="text" name="username" v-model="username" placeholder="请输入注册用户名"/>
        </div>
        <div class="input">
          <input type="password" name="password" v-model="password" placeholder="请输入密码"/>
        </div>
        <div class="input">
          <input type="text" name="nickname" v-model="nickname" placeholder="请输入昵称"/>
        </div>
        <button @click="register">注册</button>
      </div>
    </div>
</template>

<script>
import BaseHeader from 'components/BaseHeader.vue'
import { Toast } from 'vux'
import { register } from 'api/register'
import md5 from 'js-md5'

export default {
  name: 'register',
  data() {
    return {
      username: '',
      password: '',
      nickname: ''
    }
  },
  components: {
    BaseHeader, Toast
  },
  methods: {
    register() {
      const _this = this
      if (this.username === '' && this.password === '') {
        this.$vux.toast.show({
          text: '账号或密码不能为空',
          type: 'text',
          time: 2 * 500
        })
        return
      } else {
        register(this.username, md5(this.password), this.nickname).then((res) => {
          if (res.code === 200) {
            this.$vux.toast.show({
              text: '账号注册成功',
              type: 'text',
              time: 1000,
              onHide() {
                _this.$router.push('/login')
              }
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";
  @import "../../assets/less/mixin";
  .register{
    padding: 74px 30px 30px 30px;
    .input{
      height: 40px;
      width: 100%;
      border-bottom: 1px solid #e2e2e2;
      margin-bottom: 20px;
      input{
        border: 0px;
        background-color: transparent;
        height: 40px;
        width: 100%;
        font-size: @font-size-16;
      }
      input::-webkit-input-placeholder{
        color: #ccc;
        font-size: @font-size-14;
      }
    }
    button{
      width: 100%;
      height: 44px;
      background-color: @bg-4fbb0e;
      font-size: @font-size-16;
      border: 0;
      color: @fff;
      border-radius: 5px;
      padding: 0;
      margin: 60px 0 0 0;
    }
  }

</style>
