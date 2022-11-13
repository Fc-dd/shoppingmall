<template>
  <div>
    <div class="nav_wrapper" :class="{ topfixed: topfixed }" ref="topfixed">
      <div class="w">
        <ul>
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/home">全部</router-link>
          </li>
          <li>
            <router-link to="/home">后台管理系统</router-link>
          </li>
          <li>
            <router-link to="/home">Xmall小程序</router-link>
          </li>
          <li>
            <router-link to="/home">Xpay支付系统</router-link>
          </li>
          <li>
            <router-link to="/home">Xboot开发平台</router-link>
          </li>
          <li>
            <router-link to="/home">宣传视频</router-link>
          </li>
          <li>
            <router-link to="/home">Github</router-link>
          </li>
          <li>
            <router-link to="/home">商用授权</router-link>
          </li>
        </ul>
        <div class="nav_aside" :class="{'df': topfixed}">
          <div class="user">
            <a href="#"></a>
          </div>
          <div class="shop">
            <a href="#">
              <i>0</i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="box" ref="box" :class="{ db: topfixed }"></div>
  </div>
</template>

<script>
export default {
  name: 'Topwrapper',
  data() {
    return {
      topfixed: false,
      top: null,
    }
  },
  methods: {
    listenerFn() {
      document.addEventListener('scroll', this.handlerScroll, true)
    },
    handlerScroll() {
      if(!this.$refs.topfixed) return
      if (window.pageYOffset >= this.$refs.topfixed.offsetTop) this.topfixed = true
      if (window.pageYOffset <= this.top) this.topfixed = false
    },
  },
  created() {
  },
  mounted() {
    this.top = this.$refs.topfixed.offsetTop
    this.listenerFn()
  },
  destroyed() {
    document.removeEventListener('scroll', this.listenerFn)
  },
}
</script>

<style lang="less" scoped>
.topfixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.nav_wrapper {
  display: flex;
  width: 100%;
  height: 90px;
  align-items: center;
  padding: 31px 0;
  background-color: #fff;
  border-bottom: 1px solid rgb(154, 154, 154);
  .box {
    display: none;
    width: 100%;
    height: 90px;
  }
  .db {
    display: block;
  }
  .w {
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      height: 28px;
      line-height: 28px;
      align-items: center;
      li {
        position: relative;
        padding-left: 2px;
        a {
          display: block;
          padding: 0 10px;
          color: #000;
        }
        a:hover {
          color: #658deb;
        }
      }
      li::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 2px;
        height: 2px;
        background-color: #bdbdbd;
      }
      li:first-child::before {
        content: '';
        width: 0;
        height: 0;
      }
    }
    .nav_aside {
    display: none;
    color: #fff;
    .user {
      width: 36px;
      a {
        position: relative;
        display: block;
        width: 36px;
        height: 20px;
      }
      a::before {
        position: absolute;
        top: 0;
        content: '';
        width: 20px;
        height: 20px;
        background: url('/public/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png')
          no-repeat -157px -2px;
        // background-size: 240px 107px;
      }
    }
    .shop {
      position: relative;
      margin-left: 21px;
      width: 61px;
      a {
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 100%;
        background: url('/public/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png') -154px -23px;
        i {
          position: absolute;
          float: left;
          top: -10px;
          left: 16px;
          min-width: 20px;
          max-width: 100px;
          height: 20px;
          padding: 1px 3px;
          line-height: 20px;
          text-align: center;
          background-color: #ccc;
          border-radius: 10px;
          overflow: hidden;
        }
      }
    }
  }
  .df {
      display: flex;
    }
  }
}
</style>
