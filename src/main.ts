import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from "pinia"

const app = createApp(App)

app.use(router)
//创建根存储库并将其传递给应用程序
app.use(createPinia())

app.mount('#app')