<template>
  <div class="link-content">
    <MyStar :starNumber="10"></MyStar>
    <MyMeteor :delay="0" :w="3" :h="200" :rotateDeg="-80"></MyMeteor>
    <div class="content">
      <h3>归档</h3>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>