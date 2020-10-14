<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- router-link跳转方式 -->
    <!-- 使用路径,参数为router中声明的path -->
    <router-link to="/home">Home</router-link>
    <!-- 使用name属性,参数为router中声明的name -->
    <router-link to="home">Home1</router-link>

    <div @click="pushLiftCycle">跳转liftCycle</div>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to My App',
    }
  },
  // 实例创建完成后
  created () {
    // 修改导航的文字
    this.$emit("listenData","首页")
  },
  methods: {

    pushLiftCycle (){
      // 参数为router中声明的path
      this.$router.push('/liftCycle')
      console.log("跳转声明周期界面")
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
