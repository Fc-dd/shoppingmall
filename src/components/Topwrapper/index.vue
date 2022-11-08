<template>
  <div>
    <div class="nav_wrapper">
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .nav_wrapper {
    display: flex;
    align-items: center;
    height: 90px;
    padding:31px 0 ;
    background-color: #fff;
    .w {
      display: flex;
      justify-content: flex-start;
    }
    ul {
      display: flex;
      height: 28px;
      line-height: 28px;
      align-items: center;
    }
    ul li {
      position: relative;
      padding-left: 2px;
    }
    ul li::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 2px;
      height: 2px;
      background-color: #bdbdbd;
    }
    ul li:first-child::before {
      content: '';
      width: 0;
      height: 0;
    }
    ul li a {
      display: block;
      padding: 0 10px;
      color: #000;
    }
    ul li a:hover {
      color: #658deb;
    }
  }
</style>