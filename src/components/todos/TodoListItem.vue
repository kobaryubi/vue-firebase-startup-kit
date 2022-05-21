<template>
  <input
    type="checkbox"
    :checked="hasDone"
    @change="handleChangeHasDone"
  >
  <span>{{ content }}</span>
  <button @click="handleClickDeleteTodoButton">
    X
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  hasDone: {
    type: Boolean
  },
  content: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['changeHasDone', 'clickDeleteTodoButton']);

const handleChangeHasDone = (event) => {
  emit('changeHasDone', { ...props, hasDone: event.target.checked });
};

const handleClickDeleteTodoButton = () => {
  emit('clickDeleteTodoButton', props);
};
</script>
