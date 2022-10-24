<template>
  <div class="nav_tag" :style="`top:${scrolltop}px` ">
    <div v-for="item in props.state" :key="item._id">
      <h3>{{ item.title }}</h3>
      <ul class="tag_Nav">
        <li v-for="(tagItem, index) in item.secondtags" :key="tagItem._id"><span>{{ index + 1 }}.</span>
          <span>{{ tagItem.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const scrolltop = ref(90);

// 监听滚动条滚动
window.onscroll = function () {
  //变量t是滚动条滚动时，距离顶部的距离
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  // console.log(t);
  // if (t > 90) {
  //   // scrolltop.value = t
  // }

  // var scrollup:any = document.getElementById('mtop');
  // //当滚动到距离顶部200px时，返回顶部的相关按钮显示
  // if(t>=200){
  //     scrollup.style.display="block";
  // }else{//隐藏按钮正常
  //     scrollup.style.display="none";
  // }
}


const navTagRef = ref();
// 接收父组件参数并设置默认值
interface tagStateProps {
  state?: any[];
}
const props = withDefaults(defineProps<tagStateProps>(), {
});

defineExpose({
  navTagRef
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>