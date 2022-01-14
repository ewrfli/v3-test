import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from "pinia"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
//创建根存储库并将其传递给应用程序
app.use(createPinia())


app.mount('#app')