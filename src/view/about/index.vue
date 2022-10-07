<template>
  <div class="index-content">
    <MyStar :starNumber="10"></MyStar>
    <MyMeteor :delay="0" :w="3" :h="400" :rotateDeg="-80"></MyMeteor>
    <div class="content_About">
      <el-timeline>
        <el-timeline-item center timestamp="2018/4/12" placement="top">
          Tom committed 2018/4/12 20:46
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          Tom committed 2018/4/12 20:46
        </el-timeline-item>
        <el-timeline-item center timestamp="2018/4/2" placement="top">
          Event start
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          Event end
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>


<style lang="scss" scoped>
.index-content {
  width: 100vw;
  height: 1000px;

  .content_About {
    position: absolute;
    top: 50%;
    left: 40%;

    h3 {
      color: white;
      font-size: 3rem;
    }
  }
}
</style>