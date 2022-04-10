<template>
  <button @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
  export default {
    methods: {
      handleClick() {
        this.$emit("onClick");
      }
    }
  }
</script>