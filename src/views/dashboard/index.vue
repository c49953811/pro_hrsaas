<template>
  <div>
    首页
    <button @click="btnClick">调用api</button>
    <h3>动画</h3>
    <button @click="show = !show">按钮切换</button>

    <!-- 动画实现
    1：将动画元素用transition包住
    2:在transition加入name属性
    3:css配制
       .xxx-enter:进入前状态，进入时希望从什么状态变到正常状态
       .xxx-enter-active:进入过程中一直存在的css,它主要用于承载transition
       .xxx-leave-to:离开时状态，离开时希望从正常状态变到什么状态
        .xxx-leave-active:离开过程中一直存在的css,它主要用于承载transition
     -->
    <transition name="fade">
      <div v-if="show" class="box" />
    </transition>
  </div>
</template>
<script>
import { sysLogin } from '@/api/test'
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    async btnClick() {
      const res = await sysLogin()
      console.log(res)
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  background-color: #0f0;
}
.fade-enter {
  opacity: 0;
  width: 0;
  height: 0;
  transform: translateX(-200px);
}
.fade-enter-active {
  transition: all 2.5s;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.fade-leave-active {
  transition: all 2.5s;
}
</style>
