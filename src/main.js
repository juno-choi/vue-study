import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

//bootstrap 설정 추가
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

//router 설정 추가
const app = createApp(App);
app.use(router);
app.mount('#app');