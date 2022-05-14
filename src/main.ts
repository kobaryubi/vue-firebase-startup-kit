import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { worker } from './mocks/browser';
import { router } from '@/router';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const app = createApp(App);
app.use(router);
app.mount('#app');