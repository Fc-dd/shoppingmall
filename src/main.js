import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 注册全局组件
import globalComponents from '@/uitls/globalComponents'
Vue.use(globalComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
