<template>
  <div class="max-w-xl mx-auto p-4 space-y-4">
    <h1 class="text-2xl font-bold text-center">自我奖惩系统</h1>
    <p class="text-center">当前积分: <span class="font-bold">{{ store.points }}</span></p>
    <TaskManager />
    <Shop />
    <LotteryWheel />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMainStore } from './store'
import TaskManager from './components/TaskManager.vue'
import Shop from './components/Shop.vue'
import LotteryWheel from './components/LotteryWheel.vue'

const store = useMainStore()
onMounted(() => {
  store.load()
})
</script>
