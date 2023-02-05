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
            <router-link to="/goods">全部商品</router-link>
            <router-link to="/home">捐赠</router-link>
          </div>
          <!-- 用户 -->
          <div class="nav_aside" ref="nav">
            <div class="user" @mouseleave="userLeave">
              <a
                class="ico"
                href="javascript:;"
                @click="userCilck"
                @mouseenter="userHover"
              ></a>
              <div class="nav_user_wrapper" :class="{ db: user_show }">
                <div>
                  <div class="user_info">
                    <div class="user_avatar">
                      <img :src="avatar" alt="" srcset="" />
                    </div>
                    <p>{{ nickname }}</p>
                  </div>
                  <ul>
                    <li>
                      <router-link to="/order">我的订单</router-link>
                    </li>
                    <li>
                      <router-link to="/order">账号资料</router-link>
                    </li>
                    <li>
                      <router-link to="/order">收货地址</router-link>
                    </li>
                    <li>
                      <router-link to="/order">售后服务</router-link>
                    </li>
                    <li>
                      <router-link to="/order">我的优惠</router-link>
                    </li>
                    <li>
                      <a href="javascript:;" @click="logo_out">
                        退出
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- 购物车 -->
            <div class="shop">
              <a href="#">
                <i>0</i>
                <div class="cart_con">
                  <p>购物车为空</p>
                  <em>您还没有选购任何商品，现在前往商城选购吧！</em>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import { get_token, remove_token } from '@/uitls/token'
export default {
  name: 'Headers',
  data() {
    return {
      user_show: false,
    }
  },
  methods: {
    getUserInfo() {
      let token = get_token()
      this.$store.dispatch('user/userInfo', token)
    },
    // 点击用户
    userCilck() {
      if (!get_token()) {
        this.$router.push('/login')
      } else {
        alert('跳转到order页面')
      }
    },
    // 鼠标经过
    userHover() {
      // console.log('dddddd')
      if (get_token()) this.user_show = true
    },
    // 鼠标离开
    userLeave() {
      this.user_show = false
    },
    // 退出登录
    logo_out() {
      // 清除token
      remove_token()
      this.$store.state.login.token = ''
      this.$router.push('/login')
    },
  },
  computed: {
    nickname() {
      return this.$store.state.user.userInfo.nickname
    },
    avatar() {
      return this.$store.state.user.userInfo.avatar
    },
  },
  created() {
    this.getUserInfo()
  },
  mounted() {
    this.$bus.emit('navDom', [this.$refs.nav], true)
  },
}
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
    .search input::-webkit-input-placeholder {
      color: rgb(188, 188, 188);
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
      border-left: 1px solid rgba(204, 204, 204, 0.5);
    }
    .fixed {
      width: 262px;
      position: fixed;
      left: 50%;
      margin-left: 451px;
      margin-top: 0;
      z-index: 9999999;
      top: -22px;
      transform: translate3d(0, 59px, 0);
      transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .user {
      width: 36px;
      margin-left: 41px;
      position: relative;
      .nav_user_wrapper {
        display: none;
        position: absolute;
        top: 40px;
        left: 25%;
        width: 168px;
        // height: auto;
        padding-top: 20px;
        transform: translateX(-50%);
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 20px 40px rgb(0 0 0 / 15%);
        z-index: 55;
        .user_info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          .user_avatar {
            width: 46px;
            height: 46px;
            margin-bottom: 8px;
            border: 1px solid #ccc;
            border-radius: 50%;
            overflow: hidden;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          p {
            line-height: 1.5;
            color: #757575;
            font-size: 12px;
            text-align: center;
          }
        }
        ul li {
          font-size: 12px;
          text-align: center;
          border-top: 1px solid #f5f5f5;
          a {
            display: block;
            padding: 12px 0;
            color: #616161;
          }
        }
        ul li:hover {
          background-color: rgba(239, 239, 239, 0.5);
        }
      }
      .nav_user_wrapper::before {
        position: absolute;
        content: '';
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: transparent transparent #fff transparent;
      }

      .db {
        display: block;
      }
    }
    .user .ico {
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
    }
    .user .ico::before {
      position: absolute;
      top: 0;
      content: '';
      width: 20px;
      height: 20px;
      background: url('/public/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png')
        no-repeat -157px -2px;
      // background-size: 240px 107px;
    }
    .user .ico:hover::before {
      background-position: -7px -2px;
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
      .cart_con {
        display: none;
        position: absolute;
        right: -18px;
        top: 35px;
        width: 400px;
        height: 340px;
        padding-top: 189px;
        text-align: center;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAA+CAYAAACBff3hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEE2NTZBMzVGQkUwMTFFNkIzMDU5MDZDMTFDOUM3QUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEE2NTZBMzZGQkUwMTFFNkIzMDU5MDZDMTFDOUM3QUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Qzg0OTM4RUZCREUxMUU2QjMwNTkwNkMxMUM5QzdBQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQTY1NkEzNEZCRTAxMUU2QjMwNTkwNkMxMUM5QzdBQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvOQW8oAAAR8SURBVHja7FzNaxNBFJ+kaZqCoAiCxYoXpQjGtoIgaD0KVrBe9GDEUxVPehXUP0Av9SJosRfB9qbgN55Ei5f60S+wPQhaa6v2oIWE7Kb58PeSEVvt7k52drMzzT740dnty7zsL2/e/Gaym8jU1NRhxtgA0MLsrQh8B14DQ8B9fk5ra2trq8o/AsLmmpubWxobGx2di8UiKxQKLJ/Ps6WlpZc4dRL4Wk+ERSmzRMgqO0ejjHxBMEskEgdx6gWwidWRRd2+MB6Ps6ampu1o9oeECRoIYw0NDcfQ3FNPhM2jHrnugA/n4/VCWAzozWazA8Dm/2aESKQ89IgUql9WdQ3WWTcZhlniCZcUkX9RKpVaTdO8mE6nCzRDrjrNRsiVbQtrWMVIMlwFLlkNW55hrSFhK+0GMi1vlWEgbR2aO0LC/loamLUallTnYNfrQZNVIys+2REGidGNbPuBw5IG+AmcdjtLitoMJgFbTUbQwbC825DJZPrQvBNIhulmENv0Z2OVCVM1YZ/tMkwn49exCOTDDBMn7JvfRX9mrRDGr8PVtlSsSsKKIiSTyM3lcuW9syDq05/lnEOGzfudYTkKIpJlnKyu1ZZbfoPiUnyBIek7YeXCL0IYz6zhgEbcsFNm82uYqwlha2Gm5NegDmFc5xwIiI/9PL4vQ7Ja4SYkLajooo68CrLoCwzJmhAmJC1ohhL9YiVAWVGTIam9eF2m8jPKZJjKOkxG5bvJMPpUFpwKv8o6TEbluyFMSIuprMNkZki3hGldx4IgbMZpSKqsw2RmSDdFXyjDVNZhshnmhjDHGqayDpNZFrku+jqvJ2VUvm+zpAaE1bSG/UKGLQLr+W0C2ghXWZXvNsMcC7+qwlVW5csQZrtEUlW4yqp8qQzTsfDLSgqpDLMjTFXh6gVhMT9qmKrCVXaGlCHMVlqoKlyDHJJaLsBlVb4MYbQnltWt8MuqfBnCyD7qlmV4v3TzyZegCLtHj9DoYlzMPgeMoAi7ZprmGMBUzjQqG0SWYRgLODwv219M4rW0HusCYZeBE2hvpVldQc7oNtJnwBXSj7Kd0b34bHp6mtWruXmaLbSQMPUJo7XIBWCEVe7pp/r2hp/z+9bq1WKP8HNxr4N5UcO2AI+wfutY/hAXzZx8I3Echz20OvCBLIr9FLGTFrEncNgNzKpSwyh7HicSiQ6gvPClXVgCtekcsBs+9ABYwmOyaLH6EP0nbWIn4fPAy0yTJewMPt12u6+16H/ATjTPeUxYL/rtFIhNjyb2qkJYSmRXgvukPCbsVCzmLCO5T0oVwjqsHjxdEaTis8tjwpJOdxqScZ/2UFZoKitGRdaR3GfC4/c+LrKjy33GVCFsUOQBe+5z12PChkR2S7jPoCqE9UPrjNrdwEb/Az6gectjwm6j37cCsd+RryqEmcARwzDeA+X0JyFMoDadA2g4HGKS+1AWsXvQ/7hNbCoDR7mvJxbzoA/aI9+HT/IsQL/Fk+TnJ1nlR41usspjN34YfSm7l8dOLZuJJ3kJ6Pc69m8BBgCdU9EmqBxxlwAAAABJRU5ErkJggg==')
          no-repeat center 40%;
        background-color: #fbfbfb;
        border: 2px solid #ccc;
        border-radius: 8px;
        box-shadow: 0px 0px 14px -5px #6c6a6a;
        z-index: 5;
        p {
          margin-bottom: 3px;
          color: rgb(37, 37, 37);
          font-size: 20px;
          text-align: center;
          line-height: 1.2;
        }
        em {
          color: #ccc;
          font-size: 12px;
        }
      }
      .cart_con::after {
        position: absolute;
        top: -19px;
        right: 23px;
        content: '';
        width: 0px;
        height: 0px;
        border: 10px solid;
        border-color: transparent transparent white transparent;
      }
    }
    .shop a:hover .cart_con {
      display: block;
    }
  }
}
</style>
