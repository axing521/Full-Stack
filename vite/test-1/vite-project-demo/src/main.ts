import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import * as Icons from '@ant-design/icons-vue';

const app = createApp(App)

/* for (const key in Icons) {  
    app.component(key, Icons[key]);
} */

app.use(Antd).mount('#app')
