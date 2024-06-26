import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'
axios.defaults.baseURL='/api'
import router from './router/router.js'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.config.globalProperties.$axios = axios
app.mount('#app')