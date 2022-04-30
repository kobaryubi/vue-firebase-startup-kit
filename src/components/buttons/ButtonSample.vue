<template>
  <div>
    <p class="mb-2 text-2xl">Buttons</p>
    <div class="mb-2">
      <PrimaryButton @click="handleClick">Primary</PrimaryButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PrimaryButton from './PrimaryButton.vue';

export default defineComponent({
  components: {
    PrimaryButton,
  },
  emits: ['click'],
  setup() {
    const handleClick = () => {
      alert('clicked')
    }

    return {
      handleClick
    }
  }
})
</script>