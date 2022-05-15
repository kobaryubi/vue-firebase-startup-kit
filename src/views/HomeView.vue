<template>
  <div>
    <h2>Home</h2>
    <div id="firebaseui-auth-container" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ui, uiConfig } from '@/firebase';

onMounted(() => {
  ui.start('#firebaseui-auth-container', uiConfig);
});
</script>
