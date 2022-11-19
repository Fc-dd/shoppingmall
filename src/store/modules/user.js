import { fruitsList, userInfo } from "@/api/user"

const state = {
  userInfo: {}
}

const actions = {
  async getFruitsList () {
    let result = await fruitsList()
    if (result.status === 200) {
      console.log(result)
    }
  },

  async userInfo ({ commit }, token) {
    let result = await userInfo(token)
    if (result.status == 200) {
      let { nickname, avatar } = result.data[0]
      let user_info = {
        nickname,
        avatar
      }
      commit('USER_INFO', user_info)
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}

const mutations = {
  USER_INFO (state,user_info) {
    state.userInfo =  user_info
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}