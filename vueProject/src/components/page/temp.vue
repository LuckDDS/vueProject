
<template>
  <div class="bottom">
    算法练习
  </div>
</template>

<script>
export default{
  // 一个实例被创建之后执行代码
  created () {
    this.$emit('listenData', '生命周期')
  },
  mounted () {
    var arr = [21, 4, 2, 434, 123, 5343, 12, 53, 123, 1, 3, 3, 45, 1, 2, 34, 5, 6, 8, 93, 123, 34, 435, 1, 2, 3, 332, 123, 12, 143, 2, 44, 312, 432]
    // this.quickSort(arr, 0, arr.length - 1)
    this.tempFunc(arr, 0, arr.length - 1)
    console.log(arr)
  },
  methods: {
    // 默写
    tempFunc (arr) {
      if (arr.length === 0) return 0
      if (arr.length === 1) return arr[1]
      let dp = []
      dp[0] = arr[0]
      dp[1] = Math.max(arr[0], arr[1])
      for (var index = 2; index < arr.length; index++) {
        dp[index] = Math.max(dp[index - 2] + arr[index], dp[index - 1])
      }
      console.log(dp[index - 1])
    },
    sumNumbers (root) {
      if (root === null) {
        return 0
      }
      let sum = 0
      const nodeQueue = []
      const numQueue = []
      nodeQueue.push(root)
      numQueue.push(root.val)
      while (nodeQueue.length) {
        const node = nodeQueue.shift()
        const num = numQueue.shift()
        const left = node.left
        const right = node.right
        if (left === null && right === null) {
          sum += num
        } else {
          if (left !== null) {
            nodeQueue.push(left)
            numQueue.push(num * 10 + left.val)
          }
          if (right !== null) {
            nodeQueue.push(right)
            numQueue.push(num * 10 + right.val)
          }
        }
      }
      return sum
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
