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
import { ui, uiConfig, db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

const todos = ref([]);
(async () => {
  const todosCollection = collection(db, 'todos');
  const querySnapshot = await getDocs(todosCollection);
  querySnapshot.forEach((doc) => {
    todos.value.push({
      id: doc.id,
      ...doc.data()
    });
  });
})();

onMounted(() => {
  if (ui.isPendingRedirect()) {
    ui.start('#firebaseui-auth-container', uiConfig);
  }
});

const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>
