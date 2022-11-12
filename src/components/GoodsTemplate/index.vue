<template>
  <div>
    <div class="mt30 w">
      <div class="title">
        <h2>热门商品</h2>
      </div>
      <div class="bd">
          <div class="imgbanner"></div>
          <div class="goodsItem"></div>
          <div class="goodsItem"></div>
          <div class="goodsItem"></div>
          <div class="goodsItem"></div>
          <div class="goodsItem"></div>
          <div class="goodsItem"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsTemplate'
}
</script>

<style lang="less" scoped>
  .mt30 {
    margin-top: 30px;
    // height: 500px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .14);
    border-radius: 8px;
    overflow: hidden;
  }
  .title {
    height: 60px;
    padding-left: 25px;
    line-height: 60px;
    background-color: #fafafa;
    border-bottom: 1px solid rgba(0, 0, 0, .14);
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
    .imgbanner {
      width: 50%;
      height: 430px;
      background-color: skyblue;
    }
    .goodsItem {
      width: 25%;
      height: 430px;
      background-color: greenyellow;
    }
  }
</style>