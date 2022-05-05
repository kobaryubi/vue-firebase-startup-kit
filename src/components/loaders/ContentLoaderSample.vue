<template>
  <div>
    <p class="mb-2 text-2xl">
      ContentLoader
    </p>
    <ContentLoader :line="2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentLoader from '@/components/loaders/ContentLoaderSample.vue';

export default defineComponent({
  components: {
    ContentLoader
  }
});
</script>