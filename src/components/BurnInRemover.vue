<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useBurnInRemover } from './useBurnInRemover'

const { color, start } = useBurnInRemover()

onMounted(start)
onUnmounted(stop)
</script>

<template>
  <div class="burn-in-remover"></div>
</template>

<style scoped>
.burn-in-remover {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: v-bind(color);
}
</style>
