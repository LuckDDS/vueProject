
<template>
  <div class="bottom">
    我是liftCycle
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
    this.quickSort(arr, 0, arr.length - 1)
  },
  methods: {
    // 选择排序
    chosedSort () {
      var arr = [1, 4, 2, 434, 123, 5343, 12, 53, 123, 1, 3, 3, 45, 1, 2, 34, 5, 6, 8, 93, 123, 34, 435, 1, 2, 3, 332, 123, 12, 143, 2, 44, 312, 33423, 432]
      for (let index = 0; index < arr.length - 1; index++) {
        let num = arr[index]
        let tempIndex = index
        for (let subIndex = index + 1; subIndex < arr.length; subIndex++) {
          if (num > arr[subIndex]) {
            num = arr[subIndex]
            tempIndex = subIndex
          }
        }
        arr[tempIndex] = arr[index]
        arr[index] = num
      }
      console.log(arr)
    },
    // 插入排序
    insertSort () {
      var arr = [56, 4, 2, 434, 123, 5343, 12, 53, 123, 1, 3, 3, 45, 1, 2, 34, 5, 6, 8, 93, 123, 34, 435, 1, 2, 3, 332, 123, 12, 143, 2, 44, 312, 33423, 432]
      for (let index = 1; index < arr.length; index++) {
        let num = arr[index]
        for (let subIndex = index - 1; subIndex >= 0; subIndex--) {
          if (num >= arr[subIndex]) {
            if (index !== subIndex + 1) {
              // 删除元素
              arr.splice(index, 1)
              // 插入元素
              arr.splice(subIndex + 1, 0, num)
            }
            break
          }
        }
      }
      console.log(arr)
    },
    // 冒泡排序
    bubblingSort () {
      var arr = [1, 4, 2, 434, 123, 5343, 12, 53, 123, 1, 3, 3, 45, 1, 2, 34, 5, 6, 8, 93, 123, 34, 435, 1, 2, 3, 332, 123, 12, 143, 2, 44, 312, 432]
      // index必须设置为1,否则有越界的情况
      for (let index = 1; index < arr.length; index++) {
        for (let subIndex = 0; subIndex < arr.length - index; subIndex++) {
          let subNum = arr[subIndex]
          if (subNum > arr[subIndex + 1]) {
            arr[subIndex] = arr[subIndex + 1]
            arr[subIndex + 1] = subNum
          }
        }
      }
      console.log(arr)
    },
    // 快速排序,使用递归
    quickSort (arr, left, right) {
    //   console.log(arr)
    //   console.log(left + '/' + right)
      // 定义i和j的原因是下面需要使用这两个值确定下一个分组的递归左右边界
      let i = left
      let j = right
      // 不能使用0,因为arr永远是完整的数组,但是left是一直变的
      let key = arr[i]
      // 排序结束
      if (left >= right) {
        return
      }
      while (i < j) {
        // 当i<j,关键值小于从后面数的出现比key值小的数之前一直自减
        while (i < j && arr[j] >= key) {
          j--
        }
        // 这个时候key值是最小的,证明结束了
        if (i === j) {
          break
        }
        // 这里需要了解一下i++和++i是不一样滴
        arr[i++] = arr[j]
        while (i < j && arr[i] <= key) {
          i++
        }
        // 这个时候key值是最大的,证明结束了
        if (i === j) {
          break
        }
        // 这里需要了解一下j--和--j是不一样滴
        arr[j--] = arr[i]
      }
      arr[i] = key
      this.quickSort(arr, left, j - 1)
      this.quickSort(arr, j + 1, right)
    },
    // 斐波那契数列
    fibonacciSequence () {
      // 一个数是前两个数的和求第n个数是多少
      // 1,1,2,3,5,8,13,21,34
      var n = 3350
      // 上一个值
      var lastNum = 1
      // 当前值
      var w = 1
      // 第n个值
      var m = 0
      for (let index = 1; index <= n - 1; index++) {
        // m为第index+1个的值
        m = w
        // w为第index+2个的值
        w = w + lastNum
        // 重新为lastNum赋值
        lastNum = m
      }
      // 第n个的值,1000次耗费时间毫米级,时间复杂度O(n),可以使用矩阵计算更简单,但是不会
      console.log(m)
    },
    // 马杀鸡问题,动态规划
    massage () {
      // 题意:每一个数字代表预约的时间长短,按摩师不能一直工作即连着的两个预约只能接一个,
      // 或者隔两个多个选一个也可以就是不能连着,现在要求计算出总时长最长的方案,预约的顺序不能更改
      var nums = [2, 5, 3, 2, 5, 2, 3, 3, 2, 4, 6, 6, 2, 2, 1, 3]
      var dp = []
      if (nums.length === 0) return 0
      if (nums.length === 1) return nums[1]
      dp[0] = nums[0]
      dp[1] = Math.max(nums[0], nums[1])
      for (var index = 2; index < nums.length; index++) {
        dp[index] = Math.max(nums[index] + dp[index - 2], dp[index - 1])
      }
      return dp[index - 1]
    },
    // 换酒问题
    numWaterBottles (numBottles, numExchange) {
      // 小区便利店正在促销，用 numExchange 个空酒瓶可以兑换一瓶新酒。你购入了 numBottles 瓶酒。
      // 如果喝掉了酒瓶中的酒，那么酒瓶就会变成空的。请你计算 最多 能喝到多少瓶酒。
      var bottles = numBottles
      // let changeNum
      while (bottles >= numExchange) {
        // 酒瓶换到酒的数量
        numBottles += parseInt(bottles / numExchange)
        // 剩余的酒瓶
        bottles = bottles % numExchange + parseInt(bottles / numExchange)
      }
      return numBottles
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
