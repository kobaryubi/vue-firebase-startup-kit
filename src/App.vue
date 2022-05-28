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
    <div class="main__container">
      <router-view />
    </div>

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

  &__container {
    display: flex;
    justify-content: center;
  }
}
</style>