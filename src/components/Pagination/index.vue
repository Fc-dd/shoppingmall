<template>
  <div class="w">
    <div class="pagination">
      <ul>
        <li>
          <button @click="btnPage(-1)" :disabled="currentPage <= 1">上一页</button>
        </li>
        <li v-if="startOrend.start > 1">
          <a href="javascript:;" @click="ckPage(1)">1</a>
        </li>
        <li v-if="startOrend.start >= 3">
          <a href="javascript:;">.....</a>
        </li>
        <span v-for="(page, index) in startOrend.end" :key="index">
          <li v-if="page >= startOrend.start">
            <a href="javascript:;" @click="ckPage(page)">{{ page }}</a>
          </li>
        </span>
        <li v-if="startOrend.end < totalPage - 1">
          <a href="javascript:;">.......</a>
        </li>
        <li v-if="startOrend.end < totalPage">
          <a href="javascript:;" @click="ckPage(totalPage)">{{ totalPage }}</a>
        </li>
        <li>
          <button @click="btnPage(1)" :disabled="currentPage >= totalPage">下一页</button>
        </li>
      </ul>
      <div class="skip">
        <span>
          共
          <i>{{totalPage}}</i>
          页
        </span>
        <span>
          到
          <input type="text" v-model.number="skip_page" />
          页
        </span>
        <button @click="skip_btn">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pageSize: { //每页展示多少条数据
      type: Number,
      default: 8
    },
    currentPage: { //当前页
      type: Number,
      default: 10
    },
    total: { //数据总数
      type: Number,
      default: 98
    },
    continuous: { //连续页码数
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      skip_page: ''
    }
  },
  methods: {
    btnPage (page) {
      this.$emit('pageChange',page)
    },
    ckPage (page) {
      this.$emit('pageChange',{ page })
    },
    skip_btn () {
      let page = this.skip_page
      if (this.skip_page < 1) page = 1
      if (this.skip_page > this.totalPage) page = this.totalPage
      this.ckPage(page)
      this.skip_page = ''
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    startOrend () {
      let { totalPage, currentPage, continuous } = this 
      let start,end
      if (totalPage > continuous) {
        /*  
            正常情况总页数大于连续页码数
            start: 当前页 - 连续页码数 / 2
            end: 当前页 + 连续页码数 / 2
        **/
        start = currentPage - Math.floor(continuous / 2)
        end = currentPage + Math.floor(continuous / 2)

        if (start < 1) {
          // 如果start < 1说明当前在1、2、3页,start = 0,end应该是连续页码数
          start = 0
          end = continuous
        }
        if (end > totalPage - 1) {
          // 如果end > 总页数 - 1说明已经到了最后一页,start为总页数- 连续页码数 + 1,end就是总页数
          start = totalPage - continuous + 1
          end = totalPage
        }
      } else {
        /*
            否则总页数小于或者等于连续页码数
            start:　当前页
            end: 总页数　
        **/
        start = currentPage
        end = totalPage
      }
      return {
        start,
        end
      }
    }
  },
}
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: center;
  height: 50px;
  line-height: 50px;
  margin: 50px 0;
  // background-color: pink;
  ul {
    height: 100%;
    li {
      float: left;
      height: 100%;
      margin-left: 10px;
      a {
        display: block;
        height: 100%;
        padding: 0 20px;
        color: #000;
        border: 1px solid #ccc;
        background-color: #f7f7f7;
      }
      button {
        width: 90px;
        height: 100%;
        border: 1px solid #ccc;
        background-color: #f7f7f7;
      }
    }
  }
  .skip {
    margin-left: 20px;
    span {
      margin-right: 10px;
    }
    i {
      font-size: 18px;
      font-weight: 700;
    }
    input {
      width: 50px;
      height: 100%;
      text-align: center;
      font-size: 16px;
    }
    button {
      width: 70px;
      height: 100%;
      border: 1px solid #ccc;
      background-color: #f7f7f7;
    }
  }
}
</style>
