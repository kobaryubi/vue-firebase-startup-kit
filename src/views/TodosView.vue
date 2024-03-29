<template>
  <p>TodosView</p>
  <div id="firebaseui-auth-container" />
  <ul>
    <li
      v-for="todo in filteredTodos"
      :key="todo.id"
    >
      <TodoListItem
        v-bind="todo"
        @change-has-done="handleChangeHasDone"
        @click-delete-todo-button="handleClickDeleteTodo"
      />
    </li>
  </ul>
  <button @click="isHiddenDone = !isHiddenDone">
    {{ isHiddenDone ? 'Show all' : 'Hide done' }}
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { ui, uiConfig, db } from '@/firebase';
import { collection, getDocs, doc, deleteDoc, setDoc } from 'firebase/firestore';

import TodoListItem from '@/components/todos/TodoListItem.vue';

const isHiddenDone = ref(false);
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

const filteredTodos = computed(() => {
  return isHiddenDone.value
    ? todos.value.filter(({ hasDone }) => !hasDone)
    : todos.value;
});

onMounted(() => {
  if (ui.isPendingRedirect()) {
    ui.start('#firebaseui-auth-container', uiConfig);
  }
});

const handleClickDeleteTodo = async (todo) => {
  const todoDocumentRef = doc(db, 'todos', todo.id);
  await deleteDoc(todoDocumentRef);
  todos.value = todos.value.filter(({ id }) => id !== todo.id);
};

const handleChangeHasDone = async (todo) => {
  const todoDocumentRef = doc(db, 'todos', todo.id);
  await setDoc(todoDocumentRef, { hasDone: todo.hasDone }, { merge: true });
};
</script>
