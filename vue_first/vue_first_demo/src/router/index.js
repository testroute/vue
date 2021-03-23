import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../components/SignIn.vue'
Vue.use(VueRouter)

const routes = [
  // 引用的组件及对应路径关系，name可以不写。
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
      path: '/',
      name: 'SignIn',
      component: SignIn
    }
]

const router = new VueRouter({
  routes
})

export default router
