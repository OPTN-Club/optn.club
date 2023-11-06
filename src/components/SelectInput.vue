<script setup lang="ts">
import { v1 as uuid } from 'uuid';

import { SelectOption } from '../lib/types';

defineProps<{
  modelValue: string;
  id?: string;
  options?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}
</script>

<template>
  <select
    :id="id"
    :value="modelValue"
    :disabled="disabled"
    @input="onInput"
  >
    <option
      v-if="placeholder"
      valuex
      disabled
      selected
      hidden
    >
      {{ placeholder }}
    </option>
    <slot>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label || option.value }}
      </option>
    </slot>
  </select>
</template>
