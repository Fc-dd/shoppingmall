import { fruitsList } from "@/api/user"

const state = {

}

const actions = {
  async getFruitsList () {
    let result = await fruitsList()
    if (result.status === 200) {
      console.log(result)
    }
  }
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}