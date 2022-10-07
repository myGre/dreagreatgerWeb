<template>
  <div class="nav" :class="{ 'maxWidth': isWidth }">
    <div class="favicon">
      <img src="./assets/favicon.ico" alt="">
    </div>
    <nav ref="navRef">
      <li @click="navClickItem(index)" v-for="(item, index) in navObj" :key="index" class="navItemCode"
        :class="{ 'activeClass': index === navItem}">
        <p>{{ item }}</p>
      </li>
      <div class="border_nav" :style="`transform: translate3d(${navItemOfsetLeft}px, 0, 0);`"></div>
    </nav>
  </div>
  <main class="content">
    <router-view>
    </router-view>
  </main>
  <footer class="footer">
    <ul class="footer_href">
      <li><a href="#">GITHUB</a></li>
      <li><a href="#">ZHIHU</a></li>
      <li><a href="#">WEIBO</a></li>
      <li><a href="#">TWITTER</a></li>
    </ul>
    <div class="footer_text">
      <h3>Hwc Dreagreatger</h3>
      <p>桂ICP备302032号-1 <span>xxx@qq.com</span></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, nextTick, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter();

const navObj = ref(["首页", "标签", "资料卡", "留言板", "友情链接", "关于"]);
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

<style>
body {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

<style lang="scss" scoped>
.nav {
  position: absolute;
  z-index: 50;
  width: 100vw;
  height: 60px;
  top: -10%;
  transition: top 1s ease;

  &.maxWidth {
    top: 0%;
    background-color: rgb(117, 132, 145, .3);
  }

  .favicon {
    margin-left: 3rem;
    margin-top: 5px;
  }

  nav {
    z-index: 99;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
    color: white;
    font-size: 2rem;
    transition: all .5s ease;

    li {
      margin: 5px 0;
      text-align: center;
      line-height: 80%;
      cursor: pointer;
      margin-right: 3rem;

      &:hover {
        color: red;
      }

      &.activeClass {
        color: red;

      }

      p {
        width: 100%;
        height: 100%;
      }
    }

    .border_nav {
      width: 0.5rem;
      height: 2.5rem;
      box-sizing: border-box;
      top: 2.1rem;
      left: -5px;
      position: absolute;
      background-color: red;
      border-radius: 15%;
      transition: transform .3s;
    }
  }
}

.footer {
  width: 100vw;
  height: 200px;
  background-color: rgb(179, 179, 179);

  .footer_href {
    width: 100%;
    height: 50px;
    // background-color: rgb(117, 117, 117);
    display: flex;
    justify-content: center;
    border-bottom: 2px solid rgb(117, 117, 117);

    li {
      margin-left: 3rem;
      font-size: 2rem;
      line-height: 50px;

      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }

  .footer_text {
    display: flex;
    justify-content: center;
  }

  // position: absolute;
  // bottom: 0;
}
</style>
