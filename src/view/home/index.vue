<template>
  <div class="home-content">
    <!-- 导航 -->
    <div class="navs" :class="{'maxWidth': show}">
      <div class="nav">
        <div class="favicon">
          <img src="../../assets/favicon.ico" alt="">
        </div>
        <nav ref="navRef" :class="{ 'shake': show }">
          <li @click="navClickItem(index)" v-for="(item, index) in navObj" :key="index" class="navItemCode"
            :class="{ 'activeClass': index === navItem}">
            <p>{{ item }}</p>
          </li>
          <div class="border_nav" :style="`transform: translate3d(${navItemOfsetLeft}px, 0, 0);`"></div>
        </nav>
      </div>
    </div>
    <!-- 内容区 -->
    <my-mian ref="myMianRef" :isNavClick="isNavClick" @getIsNavClick="getIsNavClick" @getCurrtent="getCurrtent"
      :navItem="navItem"></my-mian>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from "vue";

const navObj = ref(["首页", "资料卡", "个人信息", "相册", "学籍"]);
const btnRef = ref();
const navRef = ref(); ///导航
const myMianRef = ref(); // mymain组件
const navItem = ref<number>(0); // 当前导航
const show = ref(false); // 是否显示导航栏
const navItemOfsetLeft = ref(0); // 边框divtop值
// 是否开启导航跳转
const isNavClick = ref(true);

watch(navItem, (newValue) => {
  navItemOfsetLeft.value = navRef.value.children[newValue].offsetLeft;
})
// 是否显示导航栏
function navShow() {
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
onMounted(() => {
  how()
})
</script>

<style lang="scss" scoped>
@import "./index.scss"
</style>