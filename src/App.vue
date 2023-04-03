<script setup lang="ts">
import BurnInRemover from './components/BurnInRemover.vue'
import { useAutoHideCursor } from './composables/useAutoHideCursor'
import { onMounted, onUnmounted } from 'vue'

const { start, stop } = useAutoHideCursor()

onMounted(start)
onUnmounted(stop)
</script>

<template>
  <BurnInRemover />
</template>
