import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/pages/Home')
  },
  {
    path:'/login',
    component: () => import('@/pages/Login'),
  },
]

const router = new VueRouter({
  routes
})

export default router
