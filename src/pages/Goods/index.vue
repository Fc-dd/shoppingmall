<template>
  <div>
    <Headers />
    <Topwrapper />
    <div class="goods">
      <div class="nav w">
        <a href="javascript:;" :class="{'active': sort === ''}" @click="sort = ''">综合排序</a>
        <a href="javascript:;" :class="{'active': sort === 'asc'}" @click="sort = 'asc'">价格从低到高</a>
        <a href="javascript:;" :class="{'active': sort === 'desc'}" @click="sort = 'desc'">价格从高到低</a>
        <div class="price_interval">
          <input type="text" placeholder="最低价格" v-model.number.lazy="minPrice"/>
          <span>-</span>
          <input type="text" placeholder="最高价格" v-model.number.lazy="maxPrice" />
          <input class="btn" type="button" value="确定" @click="flag = true" />
        </div>
      </div>
      <div class="goods_box w">
        <template v-for="item in goodsList" >
          <ItemCard :goods="item" :key="item.spuId"/>
        </template>
      </div>
    </div>
    <Pagination 
      :total="total"
      :pageSize="limit"
      :currentPage="page"
      :continuous="continuous"
      @pageChange="pageChange"
    />
    <Footer />
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard'
import Pagination from '@/components/Pagination'
export default {
  name: 'Goods',
  components: { ItemCard, Pagination },
  data () {
    return {
      // total: 99,
      // currentPage: 8,
      // pageSize: 9,
      continuous: 5,
      page: 1,
      limit: 12,
      sort: '',
      minPrice: 0,
      maxPrice: 0,
      flag: false
    }
  },
  created () {
    this.getTotal()
    this.getGoodsList()
  },
  methods: {
    pageChange (data) {
      typeof data == 'object' ? this.page = data.page : this.page += data
      this.getGoodsList()
    },
    getGoodsList () {
      let { page, limit } = this
      this.$store.dispatch('goods/getGoodsList',{page, limit})
    },
    getTotal() {
      this.$store.dispatch('goods/getTotal')
    }
  },
  computed: {
    goodsList() {
      let { goodsList } = JSON.parse(JSON.stringify(this.$store.state.goods))
      let { sort } = this
      let newGoodsList

      // 点击排序
      if (sort === 'asc') {
        newGoodsList = goodsList.sort((a, b) => a.price - b.price)
      } else if (sort === 'desc') {
        newGoodsList = goodsList.sort((a, b) => b.price - a.price)
      } else {
        newGoodsList = this.$store.state.goods.goodsList
      }

      // 输入范围排序
      let { minPrice, maxPrice } = this
      if (this.flag) {
        if (maxPrice > 0 && maxPrice > minPrice) {
        newGoodsList = goodsList.filter(item => minPrice <= Number(item.price) && Number(item.price) <= maxPrice)
        // this.flag = false
      }
      }
      return newGoodsList
    },
    total() {
      return this.$store.state.goods.total.length
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  height: 60px;
  line-height: 60px;
  justify-content: start;
  a {
    padding: 0 15px;
    color: #999;
    font-size: 12px;
  }
  .active {
    color: #5683ea;
  }
  .price_interval {
    display: flex;
    align-items: center;
    input {
      width: 80px;
      height: 30px;
      color: #999;
      text-align: center;
      background: none;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    input::-webkit-input-placeholder {
      color: rgb(183, 179, 179);
    }
    span {
      padding: 0 5px;
    }
    .btn {
      margin-left: 8px;
      color: #fff;
      background-image: linear-gradient(180deg,#678ee7,#5078df);
    }
  }
}
.goods_box {
  display: flex;
  flex-wrap: wrap;
}
</style>
