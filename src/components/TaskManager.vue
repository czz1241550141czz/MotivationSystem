<template>
  <div class="p-4 border rounded-xl">
    <h2 class="text-lg font-bold mb-2">任务管理</h2>
    <div class="mb-4">
      <input v-model="name" placeholder="任务名" class="border p-1 mr-2"/>
      <input v-model.number="reward" type="number" placeholder="积分" class="border p-1 mr-2"/>
      <input v-model.number="chance" type="number" step="0.01" placeholder="抽奖概率(0~1)" class="border p-1 mr-2"/>
      <button @click="add" class="bg-blue-500 text-white px-3 py-1 rounded">添加任务</button>
    </div>
    <ul>
      <li v-for="task in store.tasks" :key="task.id" class="flex justify-between mb-2">
        <span>{{ task.name }} (+{{ task.reward }}分, 概率{{ (task.chance*100).toFixed(0) }}%)</span>
        <button @click="store.completeTask(task.id)" class="bg-green-500 text-white px-2 rounded">完成</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '../store'

const store = useMainStore()
const name = ref('')
const reward = ref(0)
const chance = ref(0)

function add() {
  if (!name.value) return
  store.addTask({ name: name.value, reward: reward.value, chance: chance.value })
  name.value = ''
  reward.value = 0
  chance.value = 0
}
</script>
