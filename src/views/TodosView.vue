<template>
  <p>TodosView</p>
  <div id="firebaseui-auth-container" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ui, uiConfig } from '@/firebase';

onMounted(() => {
  if (ui.isPendingRedirect()) {
    ui.start('#firebaseui-auth-container', uiConfig);
  }
});
</script>