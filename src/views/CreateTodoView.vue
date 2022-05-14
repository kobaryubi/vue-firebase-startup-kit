<template>
  <h2>Create Todo</h2>
  <form>
    <label>
      content
      <input
        v-model="content"
        placeholder="content"
      >
    </label>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const content = ref('');
</script>
