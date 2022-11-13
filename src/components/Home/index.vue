<template>
  <div>
    <Headers/>
    <Topwrapper/>
    <div class="home main">
      <!-- 轮播图 -->
      <div class="banner">
        <Carousel
          :slidew="1220"
          :slideh="500"
          :delay="3000"
          :imgList="imgList"
        />
      </div>
      <!-- 活动面板 -->
      <div class="activity_panel w">
        <ul>
          <li>
            <img
              src="https://resource.smartisan.com/resource/6/610400xinpinpeijian.jpg"
              alt=""
            />
            <a href="#"></a>
          </li>
          <li>
            <img
              src="https://resource.smartisan.com/resource/6/610400yijiuhuanxin.jpg"
              alt=""
            />
            <a href="#"></a>
          </li>
          <li>
            <img
              src="https://resource.smartisan.com/resource/4/489673079577637073.png"
              alt=""
            />
            <a href="#"></a>
          </li>
          <li>
            <img
              src="https://resource.smartisan.com/resource/fe6ab43348a43152b4001b4454d206ac.jpg"
              alt=""
            />
            <a href="#"></a>
          </li>
        </ul>
      </div>
      <!-- 热门商品 -->
      <div class="hot">
        <div class="mt30 w">
          <div class="title">
            <h2>热门商品</h2>
          </div>
          <div class="bd">
            <div class="goodsItem">
              <img
                src="https://resource.smartisan.com/resource/4d9e7683b590cf4a6996d3b13136bcf8.png?x-oss-process=image/resize,w_324/format,webp"
                alt=""
              />
              <h3>坚果 3 前屏钢化玻璃保护膜</h3>
              <h6>超强透光率、耐刮花、防指纹</h6>
              <div class="price">
                <div>
                  <span>￥</span>
                  4999.0
                </div>
                <div class="pa">
                  <button class="look" style="display: inline-block;">
                    查看详情
                  </button>
                  <button class="add" style="display: inline-block;">
                    添加购物车
                  </button>
                </div>
              </div>
            </div>
            <div class="goodsItem">
              <img
                src="https://resource.smartisan.com/resource/4d9e7683b590cf4a6996d3b13136bcf8.png?x-oss-process=image/resize,w_324/format,webp"
                alt=""
              />
              <h3>坚果 3 前屏钢化玻璃保护膜</h3>
              <h6>超强透光率、耐刮花、防指纹</h6>
              <div class="price">
                <div>
                  <span>￥</span>
                  4999.0
                </div>
                <div class="pa">
                  <button class="look" style="display: inline-block;">
                    查看详情
                  </button>
                  <button class="add" style="display: inline-block;">
                    添加购物车
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 精选 -->
      <div v-for="(item,index) in componentsList" :key="index">
        <GoodsTemplate :title="item"/>
      </div>
      <!-- 底部 -->
      <Footer/>
    </div>
  </div>
</template>

<script>
import Headers from '@/components/Headers'
import Topwrapper from '@/components/Topwrapper'
import Carousel from '@/components/Carousel'
import GoodsTemplate from '@/components/GoodsTemplate'
import Footer from '@/components/Footer'

export default {
  components: { Headers, Topwrapper, Carousel, GoodsTemplate,Footer },
  data() {
    return {
      imgList: [
        {
          id: 0,
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc6eac238be23a094c1a6395401146f0.jpg?w=2452&h=920',
        },
        {
          id: 1,
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e89200db5385ff3d99fb45cc342fcd14.jpg?thumb=1&w=1471&h=552&f=webp&q=90',
        },
        {
          id: 2,
          imgUrl:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07bf453b14af984329f9778db7a35d70.jpg?thumb=1&w=1471&h=552&f=webp&q=90',
        },
      ],
      componentsList: ['坚果 R2 及配件','Smartisan TNT','官方精选配件','足迹系列保护套']
    }
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  // 轮播图
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    // perspective: 3000px;
    position: relative;
    // z-index: 19;
    margin: 0 auto;
    margin-top: 20px;
    width: 1220px;
    height: 500px;
    // background-color: pink;
  }

  // 活动面板
  .activity_panel {
    margin-top: 25px;
    height: 200px;
    // background-color: pink;
    ul {
      display: flex;
    }
    li {
      flex: 1;
      position: relative;
      width: 25%;
      height: 200px;
      // background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.14);
      border-left: none;
      cursor: pointer;
      z-index: 2222;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      a {
        position: absolute;
        display: block;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
      }
    }
    ul li:first-child {
      border-left: 1px solid rgba(0, 0, 0, 0.14);
    }
    ul li a:hover {
      box-shadow: inset 0 0 32px rgb(0 0 0 / 8%);
      transition: all 0.15s ease;
    }
  }
  // 热门
  .hot {
    .mt30 {
      margin-top: 30px;
      // height: 500px;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.14);
      border-radius: 8px;
      overflow: hidden;
    }
    .title {
      height: 60px;
      padding-left: 25px;
      line-height: 60px;
      background-color: #fafafa;
      border-bottom: 1px solid rgba(0, 0, 0, 0.14);
      h2 {
        display: inline-block;
        font-weight: bolder;
        font-size: 18px;
        color: #666;
      }
    }
    .bd {
      display: flex;
      width: 100%;
      align-items: center;
      .goodsItem {
        width: 50%;
        height: 430px;
        text-align: center;
        background-color: #fff;
        transition: all 0.3s;
        cursor: pointer;
        img {
          display: block;
          width: 206px;
          height: 206px;
          margin: 50px auto 10px;
        }
        h3 {
          padding: 0 14px;
          line-height: 1.2;
          color: #000;
          font-size: 16px;
          font-weight: 400;
          overflow: hidden;
        }
        h6 {
          line-height: 1.2;
          font-size: 12px;
          color: #d0d0d0;
          padding: 10px;
        }
        .price {
          position: relative;
          height: 30px;
          margin-top: 15px;
          line-height: 30px;
          color: #d44d44;
          font-size: 18px;
          font-weight: 700;
          span {
            font-size: 14px;
          }
          .pa {
            position: absolute;
            display: none;
            top: 50%;
            left: 50%;
            background-color: #fff;
            transform: translate(-50%, -50%);
          }
          button {
            width: 100px;
            height: 30px;
            margin: 0 5px;
            font-size: 12px;
            border-radius: 4px;
            cursor: pointer;
          }
          .look {
            color: #646464;
            background-image: linear-gradient(180deg, #fff, #f9f9f9);
            border: 1px solid #e1e1e1;
          }
          .add {
            color: #fff;
            border: 1px solid #5c81e3;
            background-image: linear-gradient(180deg, #678ee7, #5078df);
          }
        }
      }
      .goodsItem:hover {
        // transform: translateY(-3px);
        box-shadow: inset 0 0 38px rgb(0 0 0 / 8%);
        // box-shadow: 1px 1px 20px #999;
      }
      .goodsItem:hover .pa {
        display: block;
      }
    }
  }
}
</style>
