// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'   // TailwindCSS 样式入口

const app = createApp(App)

// 创建 Pinia 并挂载
const pinia = createPinia()
app.use(pinia)

// 挂载应用到 #app
app.mount('#app')
