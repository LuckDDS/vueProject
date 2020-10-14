<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
