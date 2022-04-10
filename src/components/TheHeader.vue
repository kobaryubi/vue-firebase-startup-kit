<template>
  <header>{{ title }}</header>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>
