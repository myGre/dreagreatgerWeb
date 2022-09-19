<template>
  <div class="home-content">
    <!-- 导航 -->
    <div class="navs" :class="{ 'maxHeight': show }">
      <nav :class="{ 'shake': show }">
        <li @click="navClickItem(index)" v-for="(item, index) in navObj" :key="index" class="navItemCode">
          <p>{{ item }}</p>
        </li>
        <div class="border_nav" :style="`transform: translate3d(0, ${offsettop}px, 0);`"></div>
      </nav>
      <div @click="navShow" class="btnDiv">
        <button class="icon-btn" ref="btnRef">
          <div class="icon"></div>
        </button>
      </div>
    </div>
    <!-- 内容区 -->
    <my-mian ref="myMianRef" :isNavClick="isNavClick" @getIsNavClick="getIsNavClick" @getCurrtent="getCurrtent"
      :navItem="navItem"></my-mian>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref, watch } from "vue";

const navObj = ref(["home", "资料卡", "个人信息", "相册", "学籍"]);
const btnRef = ref();
const myMianRef = ref(); // mymain组件
const navItem = ref<number>(0); // 当前导航
const show = ref(false); // 是否显示导航栏
const offsettop = ref(0); // 边框divtop值
// 是否开启导航跳转
const isNavClick = ref(true);

watch(navItem, (newValue, oldValue) => {
  // console.log(newValue, oldValue);
  let difference: number;
  difference = (newValue - oldValue) * 76;
  offsettop.value += difference;

})

// 是否显示导航栏
function navShow() {
  btnRef.value.classList.toggle("toggled");
  show.value = !show.value;
}
// 获取当前盒子
function getCurrtent(index: number) {
  navItem.value = index;
}
// 修改导航跳转状态
function getIsNavClick(chonge: boolean) {
  isNavClick.value = chonge;
}
// 当前的导航
function navClickItem(index: number) {
  isNavClick.value = true;
  navItem.value = index;
}
</script>

<style lang="scss" scoped>
@import "./index.scss"
</style>