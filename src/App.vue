<script lang="ts">
import TheHeader from './components/TheHeader.vue';
import BaseButton from './components/BaseButton.vue';

export default {
  components: {
    TheHeader,
    BaseButton,
  },
};
</script>

<template>
  <TheHeader :title="'TITLE'" />
  <main>
    <BaseButton />
  </main>
</template>

<style>
@import './assets/base.css';
</style>
