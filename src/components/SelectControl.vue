<script lang="ts">
import { v1 as uuid } from 'uuid';
import { SelectOption } from '../lib/types';

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">

defineProps<{
  modelValue: string;
  label: string;
  options?: SelectOption[];
  placeholder?: string;
  rootClass?: string;
}>();

const id = uuid();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}
</script>

<template>
  <div class="control" :class="rootClass">
    <label :for="id">{{ label }}</label>
    <select
      v-bind="$attrs"
      :id="id"
      :value="modelValue"
      @input="onInput"
    >
      <option
        v-if="placeholder"
        value
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
  </div>
</template>
