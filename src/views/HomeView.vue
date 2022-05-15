<template>
  <div>
    <h2>Home</h2>
    <div id="firebaseui-auth-container" />
  </div>
</template>

<script setup lang="ts">
import { ui } from '@/firebase';
import { EmailAuthProvider } from 'firebase/auth';

if (ui.isPendingRedirect()) {
  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      {
        provider: EmailAuthProvider.PROVIDER_ID,
        signInMethod: EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      }
    ],
  });
}
</script>
