<template>
  <TheHeader :title="'TITLE'" />
  <main>
    <p v-if="!validationMessageList.length">
      {{ count }}
    </p>
    <p v-for="message in validationMessageList" v-else :key="message">
      {{ message }}
    </p>
    <BaseButton :disabled="hasMaxCount" @on-click="plusOne">+</BaseButton>
    <BaseButton :disabled="hasMinCount" @on-click="minusOne">-</BaseButton>

    <NumberInput v-model.numberOnly="inputCount" />
    <BaseButton @on-click="insertCount">insert</BaseButton>
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
      isEditing: false,
    };
  },
  computed: {
    hasMaxCount() {
      return this.count >= 9999;
    },
    hasMinCount() {
      return this.count <= 0;
    },
    hasMaxInputCount() {
      return this.inputCount > 9999;
    },
    hasMinInputCount() {
      return this.inputCount < 0;
    },
    validationMessageList() {
      const validationList = [];

      if (this.isEditing) {
        validationList.push('編集中...');
      }

      if (this.hasMaxInputCount) {
        validationList.push('10000以上は入力できません');
      }

      if (this.hasMinInputCount) {
        validationList.push('0未満は入力できません');
      }

      return validationList;
    },
  },
  watch: {
    inputCount() {
      this.isEditing = true;
    },
  },
  methods: {
    plusOne() {
      this.count++;
    },
    minusOne() {
      this.count--;
    },
    insertCount() {
      if (this.hasMaxInputCount || this.hasMinInputCount) return;

      this.count = this.inputCount;
      this.isEditing = false;
    },
  },
};
</script>

<style>
@import './assets/base.css';
</style>
