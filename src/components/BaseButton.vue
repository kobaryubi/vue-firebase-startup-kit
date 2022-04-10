<template>
  <button @click="handleClick">button</button>
</template>

<script lang="ts">
  export default {
    methods: {
      handleClick: () => {
        console.log("button");
      }
    }
  }
</script>