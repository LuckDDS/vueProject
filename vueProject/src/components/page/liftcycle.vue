
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
    var arr = [21, 4, 2, 434, 123, 5343, 12, 53, 123, 1, 3, 3, 45, 1, 2, 34, 5, 6, 8, 93, 123, 34, 435, 1, 2, 3, 332, 123, 12, 143, 2, 44, 312, 432]
    this.quickSort(arr, 0, arr.length - 1)
  },
  methods: {
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
