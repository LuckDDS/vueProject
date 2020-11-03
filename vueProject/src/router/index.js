
import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/page/index.vue'
import home from '../components/page/home.vue'
import liftCycle from '../components/page/liftcycle.vue'
import algorithmic from '../components/page/algorithmic.vue'
import temp from '../components/page/temp.vue'
// import { component } from 'vue/types/umd'
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
    },
    {
      path: '/algorithmic',
      name: 'algorithmic',
      component: algorithmic
    },
    {
      path: '/temp',
      name: 'temp',
      component: temp
    }
  ]
})
