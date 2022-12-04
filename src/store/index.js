import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import login from '@/store/modules/login'
import goods from '@/store/modules/goods'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    login,
    goods
  }
})
