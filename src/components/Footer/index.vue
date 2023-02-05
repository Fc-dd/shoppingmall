<template>
  <div class="footer" ref="ftr">
    <div class="w">
      <div class="footer_menu">
        <ul class="clearfix">
          <li>
            <h3>订单服务</h3>
            <a href="#">购买指南</a>
            <a href="#">送货政策</a>
          </li>
          <li>
            <h3>服务支持</h3>
            <a href="#">自助服务</a>
            <a href="#">维修门店</a>
          </li>
          <li>
            <h3>媒体中心</h3>
            <a href="#">新闻动态</a>
            <a href="#">官方视频</a>
            <a href="#">图片资源</a>
          </li>
          <li>
            <h3>关注我们</h3>
            <a href="#">新浪微博</a>
            <a href="#">官方微信</a>
            <a href="#">荣誉奖项</a>
          </li>
        </ul>
        <div class="help">
          <a href="#">在线帮助</a>
        </div>
      </div>
      <div class="footer_info">
        <ul class="clearfix">
        <li>
          <a href="#">
            Copyright © 2020 smartisan.com 版权所有
          </a>
        </li>
        <li>
          <a href="#">锤子商城隐私政策</a>
        </li>
        <li>
          <a href="#">
            锤子商城用户协议
          </a>
        </li>
        <li>
          <a href="#">
            资质证照
          </a>
        </li>
      </ul>
      <ul class="clearfix">
        <li>
          <a href="#">
            京 ICP 备 19048576 号 -1
          </a>
        </li>
        <li>
          <a href="#" class="jg">京公网安备 100245358375928号</a>
        </li>
        <li>
          <a href="#">
            京食药网食备 202010034
          </a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  mounted () {
    this.postTop()
  },
  methods: {
    postTop() {
      let ftrDom = this.$refs.ftr
      this.$emit('getTop', ftrDom)
    }
  },
}
</script>

<style lang="less" scoped>
  .footer {
    width: 100%;
    margin-top: 30px;
    background-color: #fafafa;
    .w {
      padding: 60px 0;
      .footer_menu {
        position: relative;
        padding-bottom: 55px;
        border-bottom: 1px solid #ccc;
        ul li{
          float: left;
          margin-right: 90px;
          h3 {
            color: #646464;
            font-size: 12px;
            padding-bottom: 20px;
          }
          a {
            display: block;
            padding: 5px 2px;
            color: #969696;
            font-size: 12px;
          }
        }
        .help {
          position: absolute;
          right: 0;
          top: 15px;
          a {
            display: block;
            width: 132px;
            height: 30px;
            line-height: 30px;
            color: #5079d9;
            font-size: 12px;
            font-weight: 700;
            text-align: center;
            background: linear-gradient(#fcfcfc,#f5f5f5);
            border: 1px solid #d0d0d0;
            border-radius: 5px;
          }
        }
      }
    }
    .footer_info {
      padding-top: 30px;
      color: #434d55;
      font-size: 12px;
      li {
        float: left;
        line-height: 12px;
        padding: 0 10px;
        border-left: 1px solid #ccc;
        a {
          display: block;
          color: #bdbdbd;
        }
        .jg {
          position: relative;
          padding-left: 25px!important;
        }
        .jg::before {
          position: absolute;
          content: "";
          top: -5px;
          left: 0;
          width: 20px;
          height: 20px;
          background: url(//static.smartisanos.cn/indexnew/img/icon-public-security.d0289dc0.png) no-repeat;
          background-size: 20px;
        }
      }
      ul li:first-child {
        padding-left: 0;
        border-left: 0;
      }
    }
    .footer_info ul:last-child {
      margin-top: 10px;
    }
  }
</style>