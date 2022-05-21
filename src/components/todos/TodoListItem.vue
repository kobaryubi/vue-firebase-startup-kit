<template>
  <span>{{ content }}</span>
</template>

<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true
  }
});
</script>
