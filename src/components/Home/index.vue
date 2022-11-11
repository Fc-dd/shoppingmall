<template>
  <div>
    <Headers/>
    <Topwrapper/>
    <div class="home main">
      <div class="banner">
        <Carousel :slidew="672" :slideh="378" :delay="3000" :imgList="imgList"/>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '@/components/Headers'
import Topwrapper from '@/components/Topwrapper'
import Carousel from '@/components/Carousel'

export default {
  components: { Headers,Topwrapper,Carousel },
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
}
</style>