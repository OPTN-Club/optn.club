<script setup lang="ts">
import { v1 as uuid } from 'uuid';

defineProps<{
  modelValue: boolean | undefined;
  label: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean): void;
}>();

const id = uuid();

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).checked;
  emit('update:modelValue', value);
}
</script>

<template>
  <label
    :for="id"
    class="inline checkbox"
  >
    <input
      :id="id"
      :checked="modelValue"
      type="checkbox"
      name="globalUnit"
      @input="onInput"
    >
    <slot>
      {{ label }}
    </slot>
  </label>
</template>
