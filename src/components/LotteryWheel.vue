<template>
  <div class="p-4 border rounded-xl text-center">
    <h2 class="text-lg font-bold mb-2">转盘抽奖</h2>
    <p>剩余次数：{{ store.lotteryChances }}</p>
    <button :disabled="store.lotteryChances<=0" 
            @click="spin" 
            class="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50">
      抽奖
    </button>
    <p v-if="result" class="mt-3 font-bold">结果: {{ result }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '../store'

const store = useMainStore()
const result = ref('')

const prizes = ['+50 积分', '+100 积分', '再来一次', '空奖']

function spin() {
  if (store.lotteryChances <= 0) return
  store.useLottery()
  const prize = prizes[Math.floor(Math.random() * prizes.length)]
  result.value = prize
  if (prize.includes('+50')) store.points += 50
  if (prize.includes('+100')) store.points += 100
  if (prize.includes('再来一次')) store.lotteryChances++
  store.save()
}
</script>
