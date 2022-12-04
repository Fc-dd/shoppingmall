import { goodsList } from "@/api/goods";

const actions = {
  async getGoodsList ({commit}) {
    let result = await goodsList()
    if (result.status === 200) {
      commit('GOODSLIST',result.data)
    }
  }
}

const mutations = {
  GOODSLIST (state,data) {
    state.goodsList = data
  }
}

const state = {
  goodsList: []
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}