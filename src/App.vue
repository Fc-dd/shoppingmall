<template>
  <div>
    <div class="main">
      <router-view></router-view>
      <!-- <button @click="get_fruits_Info">获取所有水果信息</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    get_fruits_Info () {
      this.$store.dispatch('user/getFruitsList')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
i,em {
  font-style: normal;
}
button, img, input {
    border: none;
    outline: none;
}
body {
  font-family: PingFang SC,Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Microsoft Yahei,\\5FAE\8F6F\96C5\9ED1,STHeiti,\\534E\6587\7EC6\9ED1,sans-serif;
  color: #666;
  font-size: 14px;
}
/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}
.clearfix {
    *zoom: 1
}
.main {
  width: 100%;
  /* min-height: calc(100vh - 454px); */
  overflow: hidden;
  background-color: #ededed;
}
.w {
  width: 1220px;
  margin: auto;
}
</style>
