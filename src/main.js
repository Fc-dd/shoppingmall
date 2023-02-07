import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bus from './uitls/eventBus'

// 注册全局组件
import globalComponents from '@/uitls/globalComponents'
Vue.use(globalComponents)
Vue.config.productionTip = false
Vue.prototype.$bus = bus

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    // Vue.prototype.$bus = this
  },
}).$mount('#app')
