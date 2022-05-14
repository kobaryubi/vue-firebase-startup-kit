import TodosView from '@/views/TodosView.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/todos', component: TodosView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
