// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'   // TailwindCSS ��ʽ���

const app = createApp(App)

// ���� Pinia ������
const pinia = createPinia()
app.use(pinia)

// ����Ӧ�õ� #app
app.mount('#app')
