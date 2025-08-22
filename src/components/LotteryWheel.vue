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

const prizes = ['+3 积分', '+4 积分', '+5 积分','+6 积分','+7积分','+8积分','+9 积分']

function spin() {
  if (store.lotteryChances <= 0) return
  store.useLottery()
  const prize = prizes[Math.floor(Math.random() * prizes.length)]
  result.value = prize
  if (prize.includes('+3')) store.points += 3
  if (prize.includes('+4')) store.points += 4
  if (prize.includes('+5')) store.points += 5
  if (prize.includes('+6')) store.points += 6
  if (prize.includes('+7')) store.points += 7
  if (prize.includes('+8')) store.points += 8
  if (prize.includes('+9')) store.points += 9
  store.save()
}
</script>
