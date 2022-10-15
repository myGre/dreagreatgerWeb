<template>
  <section class="setction flex">
    <!-- <my-fireworks :isTimer="props.isTimer"></my-fireworks> -->
    <MyStar :starNumber="10"></MyStar>
    <MyMeteor :delay="0" :w="3" :h="200" :rotateDeg="-80"></MyMeteor>
    <div class="setction__left" :style="isActive ? `transform: translateY(-50%);` : ''">
      <article>
        <h1>Hwc Dreagreatger</h1>
        <p>Let's start showing off some magic...</p>
      </article>
    </div>
    <div class="setction__right">
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onActivated, onDeactivated, onMounted, ref } from "vue";

const isActive = ref(false);
const props = defineProps({
  isTimer: {
    type: Boolean,
    default: true,
  }
});
onActivated(() => {
  isActive.value = true;
})

onDeactivated(() => {
  isActive.value = false
})
onMounted(() => {
  isActive.value = true;
})
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>