import HomeView from '@/views/HomeView.vue';
import TodosView from '@/views/TodosView.vue';
import CreateTodoView from '@/views/CreateTodoView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: HomeView },
  { path: '/todos', component: TodosView },
  { path: '/todos/create', component: CreateTodoView }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
