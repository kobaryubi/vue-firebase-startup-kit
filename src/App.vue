<template>
  <TheHeader :title="'TITLE'" />
  <main>
    <p>{{ count }}</p>
    <BaseButton @onClick="plusOne">+</BaseButton>
    <BaseButton @onClick="minusOne">-</BaseButton>
  </main>
</template>

<script lang="ts">
import TheHeader from './components/TheHeader.vue';
import BaseButton from './components/BaseButton.vue';

export default {
  components: {
    TheHeader,
    BaseButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    plusOne() {
      this.count++;
    },
    minusOne() {
      this.count--;
    }
  }
};
</script>

<style>
@import './assets/base.css';
</style>
