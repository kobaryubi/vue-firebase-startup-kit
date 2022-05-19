<template>
  <p>TodosView</p>
  <div id="firebaseui-auth-container" />
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
    >
      <input
        v-model="todo.hasDone"
        type="checkbox"
        @change="updateHasDone(todo)"
      >
      {{ todo.content }}
      <button @click="deleteTodo(todo)">
        X
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ui, uiConfig, db } from '@/firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

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

const deleteTodo = async (todo) => {
  const todoDocumentRef = doc(db, 'todos', todo.id);
  await deleteDoc(todoDocumentRef);
  todos.value = todos.value.filter(({ id }) => id !== todo.id);
};

const updateHasDone = (todo) => {
  console.log(todo);
};
</script>
