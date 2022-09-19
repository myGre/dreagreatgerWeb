<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import useAlbum from "@/hooks/useAlbum";
import { activeSetctionStore } from "@/stores/activeSetction";

const store = activeSetctionStore();
const isActive = computed(() => store.isActiveAlbum);

// 导航信息
const albumNavArr: Array<string> = ['生活', '风景', '个人', '夜晚'];
// 图片信息
const imgArr: Array<any> = [
  {
    1: "https://ivang-design.com/svg-load/slider/1.jpg",
    2: "https://ivang-design.com/svg-load/slider/2.jpg",
    3: "https://ivang-design.com/svg-load/slider/3.jpg",
    4: "https://ivang-design.com/svg-load/slider/4.jpg",
  },
  {
    1: "https://ivang-design.com/svg-load/slider/5.jpg",
    2: "https://ivang-design.com/svg-load/slider/6.jpg",
    3: "https://ivang-design.com/svg-load/slider/7.jpg",
    4: "https://ivang-design.com/svg-load/slider/8.jpg",
  },
  {
    1: "https://ivang-design.com/svg-load/slider/9.jpg",
    2: "https://ivang-design.com/svg-load/slider/10.jpg",
    3: "https://ivang-design.com/svg-load/slider/12.jpg",
    4: "https://ivang-design.com/svg-load/slider/16.jpg",
  },
  {
    1: "https://ivang-design.com/svg-load/slider/13.jpg",
    2: "https://ivang-design.com/svg-load/slider/14.jpg",
    3: "https://ivang-design.com/svg-load/slider/15.jpg",
    4: "https://ivang-design.com/svg-load/slider/16.jpg",
  }
]
// hooks
const { img_MaxBoxRef, currentItem, imgBoxRef, getOffsetOrWidth, imgOffsetAndWidthArr } = useAlbum();

function clickNavItem(index: number) {
  // console.log(index);
  if (index === currentItem.value) return
  currentItem.value = index;
  // 图片的数量
  let imglenght = 0;
  for (let i in imgArr[index]) {
    imglenght++;
  }
  // 获取当前盒子中图片的随机offset或盒子中图片的宽度
  setTimeout(() => {
    getOffsetOrWidth(index, imglenght);
  }, 10)
}

onMounted(() => {
  // 获取当前盒子中图片的随机offset或盒子中图片的宽度
  getOffsetOrWidth(0, 4);
})
</script>

<template>
  <section class="setction flex">
    <div class="main_section">
      <MyBorderBox title="相册" :isActive="isActive"></MyBorderBox>
      <div class="setction__left">
        <!-- 相册 -->
        <div class="img_MaxBox" ref="img_MaxBoxRef">
          <div class="imgBox" ref="imgBoxRef">
            <img v-for="(item, index) in imgArr[currentItem]" :key="index" class="img" :src="item" alt=""
              :style="`${imgOffsetAndWidthArr[index - 1]}}`">
          </div>
        </div>
        <!-- 导航 -->
        <div class="albumNav">
          <ul class="ul">
            <li v-for="(item, index) in albumNavArr" :key="index" class="navTitle" @click="clickNavItem(index)">
              <h3 :class="{ 'titleColor': currentItem == index }">{{ item }}</h3>
              <div class="navBorder" :class="{ 'BorderAnimation': currentItem == index }"></div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 介绍 -->
      <div class="setction__right">
        <article>
          <h3>The weather started getting rough — the tiny ship was tossed.</h3>
          <p>If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
            Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>