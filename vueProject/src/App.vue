<template>
  <!-- app.vue是所有界面加载的基础,这个界面除了router-view外写其他的东西都会存在于每个界面 -->
  <div id="app">
    <!-- 导航 -->
    <div class="web-nav">我是头部</div>
    
    <!-- 所有的界面都在routerview里面加载的 -->
    <router-view class="routerclass"/>
    
    <!-- 组件嵌套组件 -->
    <webbottom/>
  </div>
</template>

<script>
// 引入其他组件,因为bottom作为嵌套的组件所以无需在index.js中的router中注册
import bottom from './components/subpage/Bottom'
export default {
  name: 'App',
  // 将组件命名为webbottom使用
  components: {
    webbottom: bottom
  }
}
</script>

<style>
/* 干掉默认边距 */
body{
  margin: 0;
  padding: 0;
}
/*  */
.routerclass{
  width: 100%;
  min-height: calc(100vh - 160px);
}
.web-nav{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #2c3e50;
  text-align: center;
  color: white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
