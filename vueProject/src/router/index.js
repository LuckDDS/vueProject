import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/page/HelloWorld.vue'
// import bottom from '@/components/Bottom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
