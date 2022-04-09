<script lang="ts">
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<template>
  <TheHeader :title="'TITLE'" />
  <main></main>
</template>

<style>
@import './assets/base.css';
</style>
