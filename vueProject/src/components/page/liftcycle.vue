
<template>
  <div class="bottom">
    我是liftCycle
  </div>
</template>

<script>
export default{
  // 一个实例被创建之前执行代码
  beforeCreate () {

  },
  // 一个实例被创建之后执行代码
  created () {
    this.$emit('listenData', '生命周期')
  },
  // 在挂载开始之前被调用
  beforeMount () {

  },
  mounted () {

  }
}
</script>

<style>
.bottom{
  width: 100%;
  height: 100px;
  background-color: aqua;
}
</style>
