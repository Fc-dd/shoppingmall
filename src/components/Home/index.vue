<template>
  <div>
    <Headers/>
    <Topwrapper/>
    <div class="home main">
      <!-- 轮播图 -->
      <div class="banner">
        <Carousel :slidew="1220" :slideh="500" :delay="3000" :imgList="imgList"/>
      </div>
      <!-- 活动面板 -->
      <div class="activity_panel w">
        <ul>
          <li><img src="https://resource.smartisan.com/resource/6/610400xinpinpeijian.jpg" alt=""></li>
          <li><img src="https://resource.smartisan.com/resource/6/610400yijiuhuanxin.jpg" alt=""></li>
          <li><img src="https://resource.smartisan.com/resource/4/489673079577637073.png" alt=""></li>
          <li><img src="https://resource.smartisan.com/resource/fe6ab43348a43152b4001b4454d206ac.jpg" alt=""></li>
        </ul>
      </div>
      <!-- 热门商品 -->
      <GoodsTemplate/>
    </div>
  </div>
</template>

<script>
import Headers from '@/components/Headers'
import Topwrapper from '@/components/Topwrapper'
import Carousel from '@/components/Carousel'
import GoodsTemplate from '@/components/GoodsTemplate'

export default {
  components: { Headers, Topwrapper, Carousel, GoodsTemplate },
  data () {
    return {
      imgList: [
        {id: 0, imgUrl: './images/w1.webp'},
        {id: 1, imgUrl: './images/w2.webp'},
        {id: 2, imgUrl: './images/w3.webp'},
        {id: 3, imgUrl: './images/w4.webp'},
      ]
    }
  },
  methods: {
   
  } 
}

</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
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
      border: 1px solid rgba(0, 0, 0, .14);
      border-left: none;
      cursor: pointer;
      z-index: 2222;
      img {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
    }
    ul li:first-child {
      border-left: 1px solid rgba(0, 0, 0, .14);
    }
    ul li:hover img {
      box-shadow: inset 0 0 38px rgb(0 0 0 / 8%);
      transition: all .15s ease;
      // background-color: red;
    }
  }
}
</style>