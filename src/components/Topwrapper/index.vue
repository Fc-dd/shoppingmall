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
      navDom: null,
    }
  },
  methods: {
    listenerFn() {
      this.$bus.on('navDom', (dom) => {
        this.navDom = dom
      })
      document.addEventListener('scroll', this.handlerScroll, true)
    },
    handlerScroll() {
      if (!this.$refs.topfixed && this.navDom) return
      if (window.pageYOffset >= this.$refs.topfixed.offsetTop){
        this.topfixed = true
        this.navDom.classList.add('fixed')
      }
      if (window.pageYOffset <= this.top){
        this.topfixed = false
        this.navDom.classList.remove('fixed')
      } 
    },
  },
  created() {},
  mounted() {
    this.top = this.$refs.topfixed.offsetTop
    this.listenerFn()
  },
  destroyed() {
    document.removeEventListener('scroll', this.listenerFn)
    this.$bus.off('navDom')
  },
}
</script>

<style lang="less" scoped>
.topfixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.nav_wrapper {
  display: flex;
  width: 100%;
  height: 90px;
  align-items: center;
  padding: 31px 0;
  background-color: #fff;
  border-bottom: 1px solid rgb(154, 154, 154);
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
  }
}
.box {
  display: none;
  width: 100%;
  height: 90px;
}
.db {
  display: block;
}
</style>
