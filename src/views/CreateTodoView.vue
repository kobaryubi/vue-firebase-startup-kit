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
      <button :disabled="!content">create</button>
    </label>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useRouter } from 'vue-router';

const content = ref();
const router = useRouter();

const createTodo = async () => {
  try {
    const todosCollection = collection(db, 'todos');
    await addDoc(todosCollection, {
      content: content.value,
      hasDone: false,
    });

    router.push('/todos');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
</script>
