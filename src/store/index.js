import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    points: 0,
    tasks: [],         // {id, name, reward, chance}
    shopItems: [
      { id: 1, name: '游戏1h', cost: 21 }
    ],
    lotteryChances: 0
  }),
  actions: {
    addTask(task) {
      this.tasks.push({ ...task, id: Date.now() })
      this.save()
    },
    completeTask(taskId) {
      const task = this.tasks.find(t => t.id === taskId)
      if (!task) return
      this.points += task.reward

      // 按概率决定是否获得抽奖机会
      if (Math.random() < task.chance) {
        this.lotteryChances++
      }
      this.save()
    },
    buyItem(itemId) {
      const item = this.shopItems.find(i => i.id === itemId)
      if (item && this.points >= item.cost) {
        this.points -= item.cost
        alert(`兑换成功: ${item.name}`)
        this.save()
      } else {
        alert('积分不足')
      }
    },
    useLottery() {
      if (this.lotteryChances > 0) {
        this.lotteryChances--
        this.save()
      }
    },
    save() {
      localStorage.setItem('store', JSON.stringify(this.$state))
    },
    load() {
      const data = localStorage.getItem('store')
      if (data) this.$patch(JSON.parse(data))
    }
  }
})

