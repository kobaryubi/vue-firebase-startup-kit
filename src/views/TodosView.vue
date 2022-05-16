<template>
  <p>TodosView</p>
  <div id="firebaseui-auth-container" />
  <ul>
    <li
      v-for="{ id, content } in todos"
      :key="id"
    >
      {{ content }}
      <button @click="deleteTodo(id)">
        X
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ui, uiConfig } from '@/firebase';

const todos = ref([
  { id: 1, content: 'A' },
  { id: 2, content: 'B' },
  { id: 3, content: 'C' },
]);

onMounted(() => {
  if (ui.isPendingRedirect()) {
    ui.start('#firebaseui-auth-container', uiConfig);
  }
});

const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>
