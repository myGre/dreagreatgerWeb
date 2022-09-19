<script setup lang="ts">
import { activeSetctionStore } from '@/stores/activeSetction';
import { computed } from 'vue';

const store = activeSetctionStore();
const isActive = computed(() => store.isActiveStudent);

</script>
  
<template>
  <section class="setction flex">
    <div class="main_section">
      <MyBorderBox title="学籍" :isActive="isActive"></MyBorderBox>
      <div class="setction__left"></div>
      <div class="setction__right">
        <article>
          <h3>The weather started getting rough — the tiny ship was tossed.</h3>
          <p>If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
            Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p>
        </article>
      </div>
    </div>
    <!-- footer -->
    <!-- <footer class="footer">
      1756554@ccc.com
    </footer> -->
  </section>
</template>
  
<style lang="scss" scoped>
@import "./index.scss";

.footer {
  // position: absolute;
}
</style>