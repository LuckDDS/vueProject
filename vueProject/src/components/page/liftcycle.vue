
<template>
  <div class="bottom">
    我是liftCycle
  </div>
</template>

<script>
export default{
  created () {
    this.$emit('listenData', '声明周期')
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
