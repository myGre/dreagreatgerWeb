<template>
  <div class="app" v-cloak>
    <my-header></my-header>
    <main class="content">
      <MyToggle></MyToggle>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <footer class="footer">
      <div class="footer_href">
        <ul class="footer_ul">
          <li><a href="#">GITHUB</a></li>
          <li><a href="#">ZHIHU</a></li>
          <li><a href="#">WEIBO</a></li>
          <li><a href="#">TWITTER</a></li>
        </ul>
      </div>
      <div class="footer_text">
        <!-- <p>Hwc Dreagreatger</p> -->
        <p>桂ICP备302032号-1 <span>xxx@qq.com</span></p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
<style>
[v-cloak] {
  display: none;
}

/* .app {
  display: none;

} */
</style>
