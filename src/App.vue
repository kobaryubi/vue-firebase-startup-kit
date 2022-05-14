<template>
  <main>
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
    </ul>
    <router-view />

    <p>{{ message }}</p>
    <p>Count is: {{ counter.count }}</p>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const counter = reactive({ count: 0 });
const message = ref('Hello World!');
</script>
