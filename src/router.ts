import HomeView from '@/views/HomeView.vue';
import TodosView from '@/views/TodosView.vue';
import CreateTodoView from '@/views/CreateTodoView.vue';
import SwiperView from '@/views/SwiperView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: HomeView },
  { path: '/todos', component: TodosView },
  { path: '/todos/create', component: CreateTodoView },
  { path: '/swiper', component: SwiperView }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
