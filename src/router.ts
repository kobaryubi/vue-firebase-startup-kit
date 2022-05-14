import HomeView from '@/views/HomeView.vue';
import TodosView from '@/views/TodosView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: HomeView },
  { path: '/todos', component: TodosView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
