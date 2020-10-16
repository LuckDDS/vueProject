<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- router-link跳转方式 -->
    <!-- 使用路径,参数为router中声明的path -->
    <router-link to="/home">Home</router-link>
    <!-- 使用name属性,参数为router中声明的name -->
    <router-link to="home">Home1</router-link>
    <div @click="pushDesktop">跳转desktop.html</div>
    <div @click="pushMinetop">跳转minetop.html</div>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to My App'
    }
  },
  // 实例创建完成后
  created () {
    // 修改导航的文字
    this.$emit('listenData', '首页')
    console.log('created')
  },
  mounted () {
    // console.log(this.$router)
    // console.log(this.$route)
  },
  methods: {
    pushLiftCycle () {
      // 参数是router中声明的path
      this.$router.push('/liftCycle')
      console.log('跳转生命周期界面')
    },
    pushDesktop () {
      // 挂载了子组件
      window.location.href = 'http://localhost:8080/desk.html#/desk/'
    },
    pushMinetop () {
      // 未挂载子组件
      window.location.href = 'http://localhost:8080/mine.html'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
