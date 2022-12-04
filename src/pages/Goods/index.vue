<template>
  <div>
    <Headers />
    <Topwrapper />
    <div class="goods">
      <div class="nav w">
        <a href="javascript:;">综合排序</a>
        <a href="javascript:;">价格从低到高</a>
        <a href="javascript:;">价格从高到低</a>
        <div class="price_interval">
          <input type="text" placeholder="最低价格" />
          <span>-</span>
          <input type="text" placeholder="最高价格" />
          <input class="btn" type="button" value="确定" />
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
      :pageSize="pageSize"
      :currentPage="currentPage"
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
      total: 99,
      currentPage: 8,
      pageSize: 9,
      continuous: 5
    }
  },
  created () {
    this.getGoodsList()
  },
  methods: {
    pageChange (data) {
      typeof data == 'object' ? this.currentPage = data.page : this.currentPage += data
    },
    getGoodsList () {
      this.$store.dispatch('goods/getGoodsList')
    }
  },
  computed: {
    goodsList() {
      return this.$store.state.goods.goodsList
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
