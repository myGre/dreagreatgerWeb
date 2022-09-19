<template>
  <!-- 详情 -->
  <div class="detail_section" :style="`${props.detail_show};`">
    <div class="movie"
      :style="`width: ${detailStyle.elWidth}%; top:${detailStyle.offsetTop}px; left:${detailStyle.offsetleft}px;`">
      <div class="poster" :style="`width: ${detailStyle.posterWidht}%;`">
        <img :src="drawerData.rowData.image" alt="" :style="`width: ${detailStyle.imgWidht}%;`" />
      </div>
      <h3 class="title"></h3>
      <div class="detail_text"
        :style="isShow ? `left:${detailStyle.detail_textLeft}%; opacity: ${detailStyle.detail_opacity}; ${detail_transitionTrue}` : `left:${detailStyle.detail_textLeft}%; opacity: ${detailStyle.detail_opacity}; ${detail_transitionFalse}`">
        <div class="cancel" @click.stop="onNodetail">X</div>
        <h3>{{ drawerData.rowData.csentence }}</h3>
        <p class="desc">
          {{ drawerData.rowData.cparagraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";
import { DrawerProps, DetailStyle } from '../interface'

const emit = defineEmits(['cancel']);

// 接收父组件传过来的参数api
const drawerData = ref<DrawerProps>({
  rowData: {
    id: '',
    image: '',
    title: '',
    csentence: '',
    cparagraph: ''
  }
});
const acceptParams = (params: DrawerProps): void => {
  drawerData.value = params;
};
// 详情页弹窗过渡效果
const detailStyle = ref<DetailStyle>({
});
const style = (params: DetailStyle): void => {
  detailStyle.value = params;
};
const props = defineProps({
  isShow: {
    type: Boolean,
  },
  detail_show: {
    type: String
  },
});

// 文本框过渡效果
const detail_transitionTrue = computed(() => {
  return `transition: all .1s cubic-bezier(.67, .13, .1, .81);`
});
const detail_transitionFalse = computed(() => {
  return `transition: all .7s cubic-bezier(.67, .13, .1, .81) .8s;`
});

// 关闭详情页
function onNodetail() {
  emit('cancel');
};

defineExpose({
  acceptParams,
  style
})
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>