//
import { createApp } from 'vue'
import App from './App.vue'

//挂载
//类似于vue2的vm但比vm更轻
// createApp(App).mount('#app')


const app = createApp(App)
//挂载
app.mount('#app')
