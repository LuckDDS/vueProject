// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Desk from './Desk.vue'
import Router from 'vue-router'
import desktop from './components/page/desk/desktop.vue'
Vue.config.productionTip = false
// 多页面应用最后一步另起一个router不和之前的router公用
Vue.use(Router)

// 自定义router的时候注意let router是写死的不能改成其他的名字
let router = new Router({
  routes: [
    {
      path: '/desk',
      name: 'desktop',
      component: desktop
    }
  ]
})
// 多页面应用配置第二步
/* eslint-disable no-new */
new Vue({
  el: '#desktop',
  router,
  components: { Desk },
  template: '<Desk/>'
})
