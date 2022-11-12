<template>
  <div>
    <div class="header_box">
      <header class="w">
        <!-- logo -->
        <div class="logo">
          <h1>
            <router-link to="/home" title="xmall商城">xmall商城</router-link>
          </h1>
        </div>
        <div class="right_box">
          <div class="nav_list">
            <div class="search">
              <input type="text" placeholder="请输入商品信息" />
              <i></i>
            </div>
            <router-link to="/home">全部商品</router-link>
            <router-link to="/home">捐赠</router-link>
          </div>
          <div class="nav_aside">
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
      </header>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header_box {
  width: 100%;
  background-color: #1a1a1a;
}
header {
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  // background-color: #000;
  .logo {
    h1 {
      display: flex;
      height: 100%;
      align-items: center;
    }
    a {
      display: block;
      width: 50px;
      height: 40px;
      text-indent: -99999999px;
      background: url('/public/global-logo-red@2x.png') no-repeat 50%;
      background-size: cover;
      background-position: 0 0;
    }
  }
  .right_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav_list {
      display: flex;
      align-items: center;
      margin-right: 22px;
    }
    .search {
      position: relative;
      width: 305px;
    }
    .search input {
      width: 100%;
      height: 36px;
      padding: 3px 35px 3px 10px;
      color: #1f2d3d;
      font-size: inherit;
      line-height: 1;
      background-color: #fff;
      border: 1px solid #bfcb9d;
      border-radius: 4px;
      outline: none;
    }
    .search i {
      position: absolute;
      top: 0;
      right: 0;
      width: 35px;
      height: 100%;
      color: red;
      background: url('@/assets/搜索.png') no-repeat center;
      background-size: 50%;
      cursor: pointer;
    }
    .nav_list a {
      // width: 110px;
      padding: 0 35px;
      margin-left: -10px;
      color: #c8c8c8;
      display: block;
      font-size: 14px;
    }
    .nav_list a:hover {
      color: #fff;
    }
    .nav_aside {
      display: flex;
      color: #fff;
      // background-color: pink;
    }
    .nav_aside::before {
      content: '|';
      color: rgba(204, 204, 204, 0.5);
    }
    .user {
      width: 36px;
      margin-left: 41px;
    }
    .user a {
      position: relative;
      display: block;
      width: 36px;
      height: 20px;
    }
    .user a::before {
      position: absolute;
      top: 0;
      content: '';
      width: 20px;
      height: 20px;
      background: url('/public/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png')
        no-repeat -157px -2px;
      // background-size: 240px 107px;
    }
    .shop {
      position: relative;
      margin-left: 21px;
      width: 61px;
    }
    .shop a {
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 100%;
      background: url('/public/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png') -154px -23px;
    }
    .shop a i {
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
</style>
