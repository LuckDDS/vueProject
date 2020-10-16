<template>
  <div id="desktop">
    <!-- 导航 -->
    <div class="web-nav">{{header}}</div>
    <!-- 所有的界面都在routerview里面加载的,这是个多页面工程这个router-view是在desk.js中自定义的和router/index.js中的router-view是两码事 -->
    <router-view class="routerclass"/>
  </div>
</template>

<script>
// 引入其他组件,因为bottom作为嵌套的组件所以无需在index.js中的router中注册
export default {
  name: 'desktop',
  data () {
    return {
      header: '我是头部'
    }
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
#desktop,body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
