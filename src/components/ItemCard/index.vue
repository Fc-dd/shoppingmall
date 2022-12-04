<template>
  <div class="goodsItem">
    <img
      :src="goods.imgUrl"
      alt=""
    />
    <h3>{{ goods.title }}</h3>
    <h6>{{ goods.introduce }}</h6>
    <div class="price">
      <div>
        <span>￥</span>
        {{ goods.price }}
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
</template>

<script>
export default {
  name: 'ItemCard',
  props: ['goods']
}
</script>

<style lang="less" scoped>
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
</style>
