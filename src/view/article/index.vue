<template>
  <div class="myDetaill-content">
    <div class="tagContent">
      <!-- 侧边栏 -->
      <nav-left></nav-left>

      <div class="tagItem_content" v-html="state.cardList[0]?.content">
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

const { state, getContentList, handleSizeChange, handleCurrentChange } = useInforCard(getSecondTag);


onActivated(() => {
  console.log(route.query);

  getContentList({ _id: route.query!.id });
})

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>