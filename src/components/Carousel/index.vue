<template>
  <div>
    <div class="my_swiper" :style="slide_size" @mouseover="my_swiper_enter" @mouseout="my_swiper_leave">
      <!-- 图片列表 -->
      <ul class="container" :style="ul_style" ref="container">
        <li :style="slide_size" v-for="(item,index) in newImgList" :key="index">
          <img :src="item.imgUrl" alt="">
        </li>
      </ul>

      <!-- 左右按钮 -->
      <div class="last" :class="{dn: !btn}" @click="last_handler" @mouseover.stop="last_enter" @mouseout.stop="last_enter">&lt;</div>
      <div class="next" :class="{dn: !btn}" @click="next_handler" @mouseover.stop="last_enter" @mouseout.stop="last_enter">&gt;</div>

      <!-- 小圆点 -->
      <ul class="circle_list" :class="{dn: !circle}">
        <li 
          v-for="(item,index) in imgList" 
          :key="item.id" 
          :class="index == circleNum ? 'circle_active' : ''"
          @click="circle_handler(index)">
          </li>
        <!-- <li v-for="item in imgList" :key="item.id"></li> -->
      </ul>

    </div>
  </div>
</template>

<script>

export default {
  name:'Carousel',
  props: {
    // 轮播图宽度
    slidew: {
      type: [Number,String],
      required: true
    },
    // 轮播图高度
    slideh: {
      type: [Number,String],
      required: true
    },
    // 图片
    imgList: {
      type: Array,
      required: true
    },
    // 循环时间
    delay: {
      type: [Number, String],
      default: 3000
    },
    // 是否显示底部小圆点
    circle: {
      type: Boolean,
      default: true
    },
    // 是否显示左右按钮
    btn: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 外层容器和li一样都是图片大小
      slide_size: {
        width: this.slidew + 'px',
        height: this.slideh + 'px'
      },
      // ul 大小 
      ul_style: {
        width: this.slidew * (this.imgList.length + 1) + 'px',
        height: this.slideh + 'px',
      },
      // 控制轮播图移动变量
      moveNum: 0,
      // 小圆点变量
      circleNum: 0,
      // 轮播图定时器
      timer: null
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.next_handler()
    },this.delay)
  },
  methods: {
    // 动画函数封装
    animate (obj,target,callback) {
      if(obj.timer)clearInterval(obj.timer)
      let step;
      obj.timer = setInterval(() => {
        if (obj.offsetLeft == target) {
          clearInterval(obj.timer)
          callback && callback()
        }
        // 用目标值减去现在的距离再除以10就是每次移动的距离
        // 最后会有除不尽的情况 正数向上取整 负数向下取整 
        step = (target - obj.offsetLeft) / 10
        step = step > 0 ?  Math.ceil(step) : Math.floor(step)
        obj.style.left = obj.offsetLeft + step + 'px'
      },)
    },
    // 上一张
    last_handler () {
      clearInterval(this.timer)
      this.moveNum --
      this.circleNum --
      // 如果图片在第一张点击了后退 就快速跳到最后一张 再去倒数第二张
      if(this.moveNum <= 0) {
        this.$refs.container.style.left = - this.newImgList.length * this.slidew + 'px'
        this.moveNum = this.newImgList.length - 1
      }
      // debugger
      this.animate(this.$refs.container, -this.moveNum * this.slidew)
      this.timer = setInterval(() => {
        this.next_handler()
      },this.delay)
    },
    // 下一张
    next_handler () {
      clearInterval(this.timer)
      this.moveNum ++
      this.circleNum++
      // 如果图片到了最后一张就快速跳到第一张 然后再去第二张
      if(this.moveNum >= this.newImgList.length) {
        this.$refs.container.style.left = 0
        this.moveNum = 1
      }
      // debugger
      this.animate(this.$refs.container, -this.moveNum * this.slidew)
        this.timer = setInterval(() => {
        this.next_handler()
      },this.delay)
    },
    // 小圆点
    circle_handler (index) {
      this.circleNum = this.moveNum = index
      this.animate(this.$refs.container, -this.moveNum * this.slidew)
    },
    // 鼠标经过 暂停播放
    my_swiper_enter () {
      clearInterval(this.timer)
    },
    // 鼠标离开 开始播放
    my_swiper_leave () {
      this.timer = setInterval(() => {
        this.next_handler()
      },this.delay)
    } ,
    // 解决经过按钮时暂停播放
    last_enter () {
      // console.log('last enter')
    }
  },
  computed: {
    // 实现无缝连接 将第一张图片接到最后一张 最后一张拼接到最前面
    newImgList () {
      let fristImg = this.imgList[0]
      let newImgList = JSON.parse(JSON.stringify(this.imgList))
      newImgList.push(fristImg)
      return newImgList
    }
  },
  watch: {
    circleNum () {
      if(this.circleNum >= this.imgList.length) {
        this.circleNum = 0
      } else if (this.circleNum <= -1) {
        this.circleNum = this.imgList.length - 1
      }
    },
    moveNum () {
      // 在这里监听连续点击第一张会有 bug
    }
  }
}
</script>

<style lang="less" scoped>
  .my_swiper {
    position: relative;
    overflow: hidden;
    .container {
      position: absolute;
      // top: 50%;
      // transform: translateY(-50%);
    }
    ul li {
      float: left;
    }
    ul li img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .last, .next {
      position: absolute;
      top: 50%;
      width: 25px;
      height: 35px;
      margin-top: -17px;
      line-height: 35px;
      color: #e3dfdf;
      font-size: 20px;
      text-align: center;
      background-color: rgba(0,0,0,.35);
      z-index: 2;
    }
    .last {
      left: -5px;
      border-radius: 0 13px 13px 0;
    }
    .next {
      right: -5px;
      border-radius: 13px 0 0 13px;
    }
    .circle_list {
      position: absolute;
      display: flex;
      align-items: center;
      bottom: 20px;
      right: 30px;
      z-index: 2;
    }
    .circle_list li {
      width: 13px;
      height: 13px;
      margin-left: 10px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, .4);
    }
    .circle_list .circle_active {
      width: 20px;
      height: 20px;
      background-color: #e3dfdf;
      border: 4px solid rgba(0, 0, 0, .6);
    }
    .dn {
      display: none;
    }
  }
</style>