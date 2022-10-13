<template>
  <el-pagination v-model:currentPage="currentPage1" :page-size="100" :small="small" :disabled="disabled"
    :background="background" layout="total, prev, pager, next" :total="1000" @size-change="handleSizeChange"
    @current-change="handleCurrentChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentPage1 = ref(5)

const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style lang="scss" scoped>

</style>