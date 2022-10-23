<template>
  <div class="myDetaill-content">
    <div class="togContent">
      <!-- 侧边栏 -->
      <nav-left :state="tagList"></nav-left>

      <!-- <div class="togItem_content">
        <h3>{{tagTitle }}</h3>
        <ul>
          <li class="item_secondtogs" v-for="(item, index) in secondtogs" :key="item._id">
            <p class="itemContent" @click="getTagList($event, index)"><span>{{ index + 1 }}.</span> {{ item.title }}</p>
            <p class="desc">
              <span>创建时间：{{ getData(item.createdAt) }}</span>
              <span> &emsp; </span>
              <span>最后更新时间：{{ getData(item.createdAt) }}</span>
            </p>
          </li>
        </ul>
      </div> -->

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
// 根标签
const tagTitle = computed(() => {
  return state.cardList[0]?.title || 'Js';
})
// 根标签列表
const tagList = computed(() => {
  return state.cardList;
})

// 二级标签列表
const secondtogs = computed(() => {
  return state.cardList[0]?.secondtogs || []
})

// 点击当前二级标签
const getTagList = (el: any, index: number) => {
  console.log(secondtogs.value[index]);


}
onActivated(() => {
  console.log(route.query);

  getContentList({ typeId: Number(route.query!.typeId) });
})

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>