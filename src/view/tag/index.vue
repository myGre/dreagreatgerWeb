<template>
  <div class="index-content">
    <MyStar :starNumber="10"></MyStar>
    <MyMeteor :delay="0" :w="3" :h="200" :rotateDeg="-80"></MyMeteor>
    <div class="content_About">
      <h3></h3>
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
    top: 30px;

    h3 {
      color: white;
      font-size: 3rem;
    }
  }
}
</style>