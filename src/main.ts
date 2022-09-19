import { createApp } from 'vue';
import './styles/common.scss';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import pinia from './stores/index';
import directives from './utils/directives';

const app = createApp(App);

app.use(router).use(pinia).use(directives).mount('#app');
