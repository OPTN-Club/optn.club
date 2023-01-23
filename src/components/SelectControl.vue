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
  label?: string;
  note?: string;
  options?: SelectOption[];
  placeholder?: string;
  rootClass?: string;
  disabled?: boolean;
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
  <div class="control" :class="[rootClass, { disabled }]">
    <label v-if="label" :for="id">
      <span>{{ label }}</span>
      <span class="label-note">{{ note }}</span>
    </label>
    <select
      v-bind="$attrs"
      :id="id"
      :value="modelValue"
      :disabled="disabled"
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
