<template>
  <TheHeader :title="'TITLE'" />
  <main>
    <p>{{ count }}</p>
    <BaseButton
      :disabled="hasMaxCount"
      @onClick="plusOne"
    >
      +
    </BaseButton>
    <BaseButton
      :disabled="hasMinCount"
      @onClick="minusOne"
    >
      -
    </BaseButton>

    <NumberInput v-model.numberOnly="inputCount" />
    <BaseButton @onClick="insertCount">insert</BaseButton>
  </main>
</template>

<script lang="ts">
import TheHeader from './components/TheHeader.vue';
import BaseButton from './components/BaseButton.vue';
import NumberInput from './components/NumberInput.vue';

export default {
  components: {
    TheHeader,
    BaseButton,
    NumberInput,
  },
  data() {
    return {
      count: 0,
      inputCount: 0,
    };
  },
  computed: {
    hasMaxCount() {
      return this.count >= 9999;
    },
    hasMinCount() {
      return this.count <= 0;
    }
  },
  methods: {
    plusOne() {
      this.count++;
    },
    minusOne() {
      this.count--;
    },
    insertCount() {
      this.count = this.inputCount;
    }
  }
};
</script>

<style>
@import './assets/base.css';
</style>
