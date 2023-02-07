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
  {
    path:'/goods',
    component: () => import('@/pages/Goods'),
  },
  {
    path:'/detail/:spuId',
    component: () => import('@/pages/Detail'),
  },
  {
    path:'/Car',
    component: () => import('@/pages/Car')
  }
]
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
