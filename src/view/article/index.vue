<template>
  <div class="myDetaill-content" ref="myDetaillRef">
    <div class="tagContent">
      <!-- 侧边栏 -->
      <nav-left ref="navLeftRef"></nav-left>

      <div class="tagItem_content">
        <h1>{{ state.cardList[0]?.title }}</h1>
        <p>
          <span>创建时间：{{ state.cardList[0]?.createdAt }}</span>
          &emsp;
          <span>最后更新时间：{{ state.cardList[0]?.updatedAt }}</span>
        </p>
        <hr>
        <div v-html="state.cardList[0]?.content"></div>
        <div v-html="state.cardList[0]?.content"></div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getSecondTag } from '@/api/modules/tag';
import { useInforCard } from '@/hooks/useinforCard';
import NavLeft from './component/NavLeft/index.vue';
import { computed, onActivated, ref } from 'vue';
import { getData } from '@/utils/index';
import { useRoute } from 'vue-router';

const route = useRoute();
const myDetaillRef = ref();
const navLeftRef = ref();
const { state, getContentList, handleSizeChange, handleCurrentChange } = useInforCard(getSecondTag);

onActivated(() => {
  getContentList({ _id: route.query!.id });
})

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>