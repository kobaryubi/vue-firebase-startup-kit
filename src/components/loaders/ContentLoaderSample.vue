<template>
  <div>
    <p class="mb-2 text-2xl">
      ContentLoader
    </p>
    <ContentLoader :line="2" />
  </div>
  <div>
    <p>fetch data</p>
    <Suspense>
      <template #default>
        <PostView />
      </template>
      <template #fallback>
        <ContentLoader :line="3" />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentLoader from '@/components/loaders/ContentLoader.vue';
import PostView from '@/components/PostView.vue';

export default defineComponent({
  components: {
    ContentLoader,
    PostView
  }
});
</script>