<template>
  <svg stroke="#fff" @click="onclick" stroke-linecap="round">
    <g class="stage" ref="stageRef">
      <rect width="100vw" height="100vh" fill="rgba(0,0,0,0)" stroke="none" />
    </g>
  </svg>
</template>

<script setup lang="ts" >
import { onDeactivated, onMounted, reactive, ref, watch } from "vue";
import { gsap } from "gsap";
import useFireworks from '@/hooks/useFireworks';

const props = defineProps({
  isTimer: {
    type: Boolean,
    default: true,
  }
});

const {
  stageRef,
  toggleRef,
  onclick,
  toggleAuto,
} = useFireworks();
let timer: any; // 定时器

// 触发定时器持续时间
function getTime() {
  return Math.floor(Math.random() * 3000 + 2000);
}

watch(() => props.isTimer, (newValue, oldValue) => {
  if (!newValue) return clearInterval(timer);
  let i = 0;
  timer = setInterval(() => {
    toggleAuto();
    i++;
    if (i > 50) {
      clearInterval(timer);
    }
  }, getTime())
});

// visibilitychange事件 ，当浏览器的某个标签页切换到后台，或从后台切换到前台时就会触发该消息。
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // 页面被挂起
    clearInterval(timer);

  } else {
    // 页面被打开
    let i = 0;
    timer = setInterval(() => {
      toggleAuto();
      i++;
      if (i > 50) {
        clearInterval(timer);
      }
    }, getTime())

  }
})

onMounted(() => {
  let i = 0;
  timer = setInterval(() => {
    toggleAuto();
    i++;
    if (i > 3) {
      clearInterval(timer);
    }
  }, getTime())
});

onDeactivated(() => {
  clearInterval(timer);
});
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 9;
  font-family: 'Roboto', sans-serif;
  font-size: 19px;
}
</style>