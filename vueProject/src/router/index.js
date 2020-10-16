
import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/page/index/index.vue'
import home from '../components/page/index/home.vue'
import liftCycle from '../components/page/index/liftcycle.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/liftCycle',
      component: liftCycle
    }
  ]
})
