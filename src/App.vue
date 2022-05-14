<template>
  <main>
    <h1>TODO List</h1>

    <p>{{ message }}</p>
    <p>Count is: {{ counter.count }}</p>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const counter = reactive({ count: 0 });
const message = ref('Hello World!');
</script>
