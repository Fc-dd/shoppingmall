import { login } from '@/api/user'
import { get_token, set_token } from '@/uitls/token'
const state = {
  token: get_token()  
}

const actions = {
  async login({ state }, user) {
    let result = await login()
    if (result.status === 200) {
      let { data } = result
      let token
      let userVariable = data.some((item) => {
        if (item.username == user.username && item.password == user.password){
          token = item.token
          return item
        }
      })
      if (!userVariable) return Promise.reject(new Error('用户名或密码输入错误'))
      if (!state.token) {
        set_token(token)
      }
    }
  },
}

const mutations = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
