<template>
  <h2>Create Todo</h2>
  <form @submit.prevent="createTodo">
    <label>
      content
      <input
        v-model="content"
        type="text"
        placeholder="content"
      >
      <button>create</button>
    </label>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const content = ref();
const createTodo = () => {
  console.log(content.value);
};
</script>
