<template>
  <input :value="modelValue" type="number" @input="emitValue" />
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
