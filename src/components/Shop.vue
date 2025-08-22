<template>
  <div class="p-4 border rounded-xl">
    <h2 class="text-lg font-bold mb-2">商城</h2>
    <ul>
      <li v-for="item in store.shopItems" :key="item.id" class="flex justify-between mb-2">
        <span>{{ item.name }} - {{ item.cost }} 积分</span>
        <button @click="store.removeShopItem(item.id)" class="bg-purple-500 text-white px-2 rounded">删除</button>
        <button @click="store.buyItem(item.id)" class="bg-purple-500 text-white px-2 rounded">兑换</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useMainStore } from '../store'
const store = useMainStore()
</script>
