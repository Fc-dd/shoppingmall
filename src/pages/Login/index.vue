<template>
  <dir class="login_container">
    <div class="login_card">
      <div class="title">
        <p>使用Xmall账号登录</p>
      </div>
      <ul>
      <li>
        <div class="input">
          <input type="text" name="" id="" placeholder="账号" v-model="username">
        </div>
      </li>
      <li>
        <div class="input">
          <input type="text" name="" id="" placeholder="密码" v-model="password">
        </div>
      </li>
      <li class="register">
        <a href="#">没有账号? 注册一个</a>
      </li>
    </ul>
    <button class="login" @click="login">登录</button>
    </div>
  </dir>
</template>

<script>
import {login} from '@/api/user'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      const {username, password} = this
      try {
        await this.$store.dispatch('login/login',{username, password})
        this.$router.push('/home')
      } catch (err) {
        alert(err.message)
      }
    }
  }
}
</script>

<style lang="less" sacoped>
.login_container {
  position: relative;
  // width: 100vw;
  height: 620px;
  background: url('https://static.smartisanos.cn/account.common/img/v3/bg_7fb769c373@2x.png')
    repeat center;
  background-size: auto;
  .login_card {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 450px;
    margin-left: -225px;
    padding: 0 20px;
    border: 2px solid;
    border-radius: 10px;
    background-color: #fff;
    .title {
      position: relative;
      height: 92px;
      margin: 23px 0 50px;
      padding-top: 75px;
      background-image: url('http://xmall.exrick.cn/static/images/smartisan_4ada7fecea.png');
      background-repeat: no-repeat;
      background-position: top;
      background-size: 140px;
      box-sizing: content-box;
      p {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: auto;
        line-height: 1em;
        color: #333;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        // border-bottom: 1px solid #dcdcdc;
      }
    }
    ul li {
      margin-bottom: 12px;
      .input {
        display: flex;
        height: 50px;
        align-items: center;
        input {
          width: 100%;
          height: 100%;
          padding: 10px 15px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 10px;
        }
      }
    }
    .register {
      text-align: right;
      a {
        color: #ccc;
        font-size: 12px;
      }
      a:hover {
        color: rgb(133, 189, 233);
      }
    }
    .login {
      width: 100%;
      height: 50px;
      margin: 10px 0 20px;
      color: aliceblue;
      font-size: 18px;
      background-color: #cedcfb;
      border-radius: 10px;
    }
  }
}
</style>
