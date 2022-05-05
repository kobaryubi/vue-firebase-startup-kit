<template>
  <div
    v-for="post in data"
    :key="post.id"
  >
    <p class="py-2 border-b-4">
      {{ post.id }}:{{ post.title }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

type Post = {
  usearId: number,
  id: number,
  title: string,
  completed: boolean
}

export default defineComponent({
  async setup() {
    const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

    return {
      data
    };
  }
});
</script>