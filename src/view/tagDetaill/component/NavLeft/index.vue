<template>
  <div class="nav_tog">
    <div v-for="item in props.state" :key="item._id">
      <h3>{{ item.title }}</h3>
      <ul class="tog_Nav">
        <li v-for="togItem in item.secondtogs" :key="togItem._id">
          <span>{{ togItem.title }}</span>
        </li>
      </ul>
    </div>

    <!-- <div>
          <h3>目录</h3>
          <ul class="tog_Item">
            <li>
              <span>js</span>
            </li>
            <li>
              <span>js</span>
            </li>
            <li>
              <span>js</span>
            </li>
            <li>
              <span>js</span>
            </li>
          </ul>
        </div> -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

// 接收父组件参数并设置默认值
interface tagStateProps {
  state?: any[];
}
const props = withDefaults(defineProps<tagStateProps>(), {
});

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>