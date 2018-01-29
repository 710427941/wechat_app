<template>
    <div class="box">
      <scroll :data="allUser" class="content">
        <div>
          <div class="list">
            <ul>
              <li v-for="(item,index) in allUser">
                <router-link :to="/numberInfo/ + item.user_id" tag="div" class="item">
                  <div class="icon">
                    <img width="60" height="60" v-lazy="item.user_headerpic">
                  </div>
                  <div class="text">
                    <h2 class="name">{{item.user_name}}</h2>
                    <p class="desc">描述等待添加.....</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </scroll>
    </div>
</template>

<script>
  import Scroll from 'components/scroll/Scroll'
  import { getAllUser } from 'api/user'

  export default {
    name: 'home',
    data() {
      return {
        allUser: []
      }
    },
    components: {
      Scroll
    },
    created() {
      setTimeout(() => {
        this._getAllUser()
      }, 20)
    },
    methods: {
      _getAllUser() {
        getAllUser().then(response => {
          this.allUser = response.data
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";
  .list{
    .item{
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 15px 15px 15px;
      border-bottom: 1px solid #f3f3f3;
    }
    .icon{
      flex: 0 0 60px;
      width: 60px;
      padding-right: 10px;
    }
    .text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      line-height: 20px;
      overflow: hidden;
    }
    .name{
      margin-bottom: 10px;
    }
    .desc{
    }
  }

</style>
