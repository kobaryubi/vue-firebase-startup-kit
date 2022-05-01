<template>
  <div
    class="
      inline-block
      w-full
      overflow-hidden
      border-2
      border-solid
      rounded-md
      text-gray-80
      h-14
    "
    :class="`${focusedClass} ${errorClass} ${disabledLabelClass}`"
  >
    <label class="flex items-center h-full px-2 cursor-text">
      <span
        class="text-gray-400 select-none"
      >
        {{ label }}
      </span>
      <input
        class="w-full mt-3 placeholder-gray-400 focus:outline-none"
        v-bind="$attrs"
        v-on="listeners"
      >
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<'text'>,
      default: 'text'
    }
  },
  setup(props, { emit }) {

    const handleInput = ({target}: {target:HTMLInputElement}) => {
      console.log(target.value);
    };

    const listeners = computed(() => ({
      input: handleInput
    }));

    return {
      listeners
    };
  }
});
</script>