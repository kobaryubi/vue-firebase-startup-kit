import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

createApp(App).mount('#app');
