<template>
  <div>
    <p class="mb-2 text-2xl">Dialogs</p>
    <div>
      <BaseDialog :visible="isVisible" @backdrop-clicked="switchDialog">
        <template #title>
          <p class="font-bold">Dialog</p>
        </template>
        <template #body>
          本文
        </template>
        <template #footer>
          <div class="flex justify-end">
            <SecondaryButton @click="switchDialog">close</SecondaryButton>
          </div>
        </template>
      </BaseDialog>
    </div>
    <div class="mb-2">
      <PrimaryButton @click="switchDialog">open</PrimaryButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseDialog from './BaseDialog.vue';
import PrimaryButton from '../buttons/PrimaryButton.vue';
import SecondaryButton from '../buttons/SecondaryButton.vue';

export default defineComponent({
  components: {
    BaseDialog,
    PrimaryButton,
    SecondaryButton
  },
  setup() {
    const isVisible = ref(false)
    const switchDialog = () => {
      isVisible.value = !isVisible.value
    }

    return {
      isVisible,
      switchDialog
    }
  }
})
</script>