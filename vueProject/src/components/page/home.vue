
<template>
  <div class="bottom">
    我是Home
    <div @click="goback">返回</div>
  </div>
</template>

<script>
export default{
  created () {
    this.$emit('listenData', 'home')
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
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
