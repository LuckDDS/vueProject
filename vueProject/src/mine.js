// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mine from './Mine.vue'
import Minetop from '../src/components/page/minetop.vue'
import Router from 'vue-router'

Vue.use(Router)
Vue.config.productionTip = false
// 多页面应用配置第二步
/* eslint-disable no-new */
// 自定义router的时候注意let router是写死的不能改成其他的名字
let router = new Router({
  routes: [
    {
      path: '/mine',
      name: 'Mine',
      component: Minetop
    }
  ]
})

// 多页面应用配置第二步
/* eslint-disable no-new */
new Vue({
  el: '#mine',
  router,
  components: { Mine },
  template: '<Mine/>'
})