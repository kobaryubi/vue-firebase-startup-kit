<template>
  <main class="main">
    <h1>TODO List</h1>
    <ul>
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/todos">
          Todos
        </router-link>
      </li>
      <li>
        <router-link to="/todos/create">
          Create Todo
        </router-link>
      </li>
      <li>
        <router-link to="/swiper">
          Swiper
        </router-link>
      </li>
    </ul>
    <router-view />

    <p>Count is: {{ counter.count }}</p>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const counter = reactive({ count: 0 });
</script>

<style scoped lang="scss">
@use '@/assets/base';

.main {
  background-color: base.$main-background-color;
}
</style>