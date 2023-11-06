<script lang="ts">
import { v1 as uuid } from 'uuid';

import { SelectOption } from '../lib/types';

import SelectInput from './SelectInput.vue';

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

function onUpdate(value: string) {
  emit('update:modelValue', value);
}
</script>

<template>
  <div
    class="control"
    :class="[rootClass, { disabled }]"
  >
    <label
      v-if="label"
      :for="id"
    >
      <span>{{ label }}</span>
      <span class="label-note">{{ note }}</span>
    </label>

    <SelectInput
      v-bind="$attrs"
      :id="id"
      :modelValue="modelValue"
      :disabled="disabled"
      :options="options"
      @update:modelValue="onUpdate"
    >
      <slot />
    </SelectInput>
  </div>
</template>
