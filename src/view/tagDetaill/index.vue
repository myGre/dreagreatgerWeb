<template>
  <div class="myDetaill-content">
    <div class="togContent">
      <nav-left :state="tagList"></nav-left>
      <div class="togItem_content">
        <h3>{{tagTitle }}</h3>
        <ul>
          <li class="item_secondtogs" v-for="(item, index) in secondtogs" :key="item._id">
            <p class="itemContent"><span>{{ index + 1 }}.</span> {{ item.title }}</p>
            <p class="desc">{{ getData(item.createdAt) }}</p>
          </li>
        </ul>
      </div>

      <!-- <el-timeline>
          <el-timeline-item v-for="(activity, index) in secondtogs" :key="index" :icon="activity.icon" type="primary"
            :color="activity.color" :size="activity.size" :hollow="activity.hollow"
            :timestamp="getData(activity.createdAt)">
            {{ activity.title }}
          </el-timeline-item>
        </el-timeline> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getRootTog } from '@/api/modules/tag';
import { useInforCard } from '@/hooks/useinforCard';
import NavLeft from './component/NavLeft/index.vue';
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { getData } from '@/utils/index';
import { useRoute } from 'vue-router';

const route = useRoute();

let typeId = ref(Number(route.query!.typeId));

const { state, getContentList, handleSizeChange, handleCurrentChange } = useInforCard(getRootTog, { typeId: typeId.value });
// 根标签
const tagTitle = computed(() => {
  return state.cardList[0]?.title || 'Js';
})
// 根标签列表
const tagList = computed(() => {
  return state.cardList;
})

// 二级标签
const secondtogs = computed(() => {
  return state.cardList[0]?.secondtogs || []
})

onBeforeMount(() => {
  getContentList();
})

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>