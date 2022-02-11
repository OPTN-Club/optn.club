<script lang="ts">
import { SelectOption } from '../lib/types';

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  label: string;
  options?: SelectOption[];
  placeholder?: string;
  rootClass?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="control" :class="rootClass">
    <label>{{ label }}</label>
    <select v-bind="$attrs" :value="modelValue" @input="onInput">
      <option v-if="placeholder" value disabled selected hidden>{{ placeholder }}</option>
      <slot>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >{{ option.label || option.value }}</option>
      </slot>
    </select>
  </div>
</template>
