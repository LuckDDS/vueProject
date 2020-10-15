
<template>
  <div class="bottom">
    <div>我是底部</div>
    <div>{{subMsgFromSuper}}</div>
  </div>
</template>

<script>
export default{
  name: 'bottom',
  data () {
    return {

    }
  },
  methods: {
    invokeFromSuper () {
      console.log('这是父类调用子类的方法')
    }
  },
  props: ['subMsgFromSuper']
}
</script>

<style>
.bottom{
  width: 100%;
  height: 100px;
  background-color: aqua;
}
</style>
