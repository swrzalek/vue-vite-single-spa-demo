import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import {registerSpas, runSpas} from "@/singleSpa";
import '@/assets/main.css'
const app = createApp(App)
app.use(router);

registerSpas();
runSpas();

app.mount('#app')
