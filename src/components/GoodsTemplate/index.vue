<template>
  <div>
    <div class="mt30 w">
      <div class="title">
        <h2>官方精选</h2>
      </div>
      <div class="bd">
        <div class="imgbanner">
          <img
            src="https://resource.smartisan.com/resource/1/1220858shoujilouceng.jpg"
            alt=""
          />
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
</template>

<script>
export default {
  name: 'GoodsTemplate',
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
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
  flex-wrap: wrap;
  img {
    cursor: pointer;
  }
  .imgbanner {
    width: 50%;
    height: 430px;
    background-color: skyblue;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .imgbanner:hover {
    box-shadow: inset 0 0 38px rgb(0 0 0 / 8%);
    transition: all .15s ease;
  }
  .goodsItem {
    width: 25%;
    height: 430px;
    text-align: center;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s;
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
        width: 100%;
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
    transform: translateY(-3px);
    box-shadow: 1px 1px 20px #999;
  }
  .goodsItem:hover .pa {
    display: block;
  }
}
</style>
