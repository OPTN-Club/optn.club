<script setup lang="ts">
import { reactive, watch } from 'vue';
import { v1 as uuid } from 'uuid';
import { FrontAndRearSettings } from '../lib/types';

const props = withDefaults(defineProps<{
  modelValue: FrontAndRearSettings;
  label?: string;
  placeholder?: string;
  required?: boolean;
  step?: number | string;
  min?: number | string;
  max?: number | string;
  attachRight?: boolean;
  attachLeft?: boolean;
  disabled?: boolean;
}>(), {
  label: '',
  placeholder: 'Stock',
  required: false,
  step: 1,
  min: 0,
  max: 9999,
});

const emit = defineEmits<{
  (e: 'update:modelValue', v: FrontAndRearSettings): void,
}>();

const state = reactive({ form: { ...props.modelValue } });

const id = uuid();

watch(state, () => {
  emit('update:modelValue', state.form);
});

watch(() => props.modelValue, (current) => {
  if (current !== state.form) state.form = { ...current };
});
</script>

<template>
  <div class="control" :class="{ disabled }">
    <div class="label">{{ label }}</div>
    <div class="flex">
      <div class="relative">
        <label
          :for="`${id}front`"
          class="text-yellow absolute left-2 top-0 bottom-0 flex items-center mb-0"
        >F</label>
        <input
          :id="`${id}front`"
          v-model="state.form.front"
          :placeholder="placeholder"
          class="indent-4 rounded-r-none border-r-0"
          :class="{ 'rounded-l-none': attachLeft }"
          type="number"
          :step="step"
          :min="min"
          :max="max"
          :disabled="disabled"
        >
      </div>
      <div class="relative">
        <label
          :for="`${id}rear`"
          class="text-yellow absolute left-2 top-0 bottom-0 flex items-center mb-0"
        >R</label>
        <input
          :id="`${id}rear`"
          v-model="state.form.rear"
          :placeholder="placeholder"
          class="pl-6 rounded-l-none"
          :class="{ 'rounded-r-none border-r-0': attachRight }"
          type="number"
          :step="step"
          :min="min"
          :max="max"
          :disabled="disabled"
        >
      </div>
    </div>
  </div>
</template>
