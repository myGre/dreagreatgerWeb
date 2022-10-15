<template>
  <header class="header" :class="{ 'maxHeader': isWidth }">
    <div class="favicon">
      <img src="@/assets/favicon.ico" alt="">
    </div>
    <nav ref="navRef">
      <li @click="navClickItem(index)" v-for="(item, index) in navObj" :key="index" class="navItemCode">
        <p :class="{ 'activeClass': index === navItem}">{{ item }}</p>
      </li>
      <div class="border_nav" :style="`transform: translate3d(${navItemOfsetLeft}px, 0, 0);`"></div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, nextTick, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter();

const navObj = ref(["首页", "标签", "资料卡", "留言板", "归档", "关于"]);
const isWidth = ref(false);
const navItemOfsetLeft = ref(0); // 边框divtop值
const navItem = ref(0); // 当前导航
const navRef = ref();

// 导航路由集合
const navRouter = computed(() => {
  const routers = router.options.routes;
  const routerArr: string[] = [];
  routers.forEach(item => {
    if (item.meta?.nav) {
      routerArr.push(item.path);
    }
  });
  return routerArr;
})

function navClickItem(index: number) {
  navItem.value = index;
  // 路由跳转
  router.push(navRouter.value[index]);
}

// 监听当前导航变化
watch(navItem, (newValue) => {
  navItemOfsetLeft.value = navRef.value.children[newValue].offsetLeft;
})

onMounted(() => {
  nextTick(() => {
    isWidth.value = true;
  });
  // 刷新后当前导航所在的位置
  navRouter.value.forEach((item, index) => {
    if (item === router.options.history.location) {
      navItem.value = index;
    }
  })
})

</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>