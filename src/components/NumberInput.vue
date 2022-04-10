<template>
  <input :value="modelValue" @input="emitValue" type="number" />
</template>

<script lang="ts">
export default {
  props: {
    modelValue: {
      type: Number,
    },
    modelModifiers: {},
  },
  methods: {
    emitValue({ target: { value } }) {
      if (this.modelModifiers.numberOnly && value === '') {
        value = 0;
      }

      this.$emit('update:modelValue', Number(value));
    },
  },
};
</script>
