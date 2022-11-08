<template>
  <div>
    <Headers/>
    <Topwrapper/>
    <div class="home main">
      <div class="banner">
        <Carousel/>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '@/components/Headers'
import Topwrapper from '@/components/Topwrapper'
import Carousel from '@/components/Carousel'
import Swiper from 'swiper'

export default {
components: { Headers,Topwrapper,Carousel }
}

</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  .banner {
    cursor: pointer;
    perspective: 3000px;
    position: relative;
    z-index: 19;
    margin: 0 auto;
    margin-top: 20px;
    width: 1220px;
    height: 500px;
    background-color: pink;
  }
}
</style>