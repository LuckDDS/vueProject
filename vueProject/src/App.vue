<template>
  <!-- app.vue是所有界面加载的基础,这个界面除了router-view外写其他的东西都会存在于每个界面 -->
  <div id="app">

    <!-- 导航 -->
    <div class="web-nav">{{header}}</div>
    
    <!-- 所有的界面都在routerview里面加载的 -->
    <!-- listenData子组件给父组件传值使用this.$emit("listenData","传值内容") -->
    <router-view class="routerclass" v-on:listenData="changeapp"/>
    
    <!-- 组件嵌套组件 -->
    <webbottom/>

  </div>
</template>

<script>
// 引入其他组件,因为bottom作为嵌套的组件所以无需在index.js中的router中注册
import bottom from './components/subpage/Bottom'
export default {
  name: 'App',
  data () {
    return{
      header: '我是头部'
    }
  },
  methods: {
    // 数据来源自子组件,子组件给父组件传值
    changeapp(data){
      this.header = data
    }
  },
  // 将组件命名为webbottom使用
  components: {
    webbottom: bottom
  }
}
</script>

<style>
/* 设置router-view框的大小样式 */
.routerclass{
  width: 100%;
  min-height: calc(100vh - 160px);
  margin: 0;
  padding: 0;
}
/* 导航的样式 */
.web-nav{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #2c3e50;
  text-align: center;
  color: white;
}
#app,body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
