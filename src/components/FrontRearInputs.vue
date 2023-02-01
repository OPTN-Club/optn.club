<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
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

const rootClass = computed(() => {
  if (props.attachRight || props.attachLeft) {
    return '!min-w-[350px]';
  }
  return '!min-w-[250px]';
});

watch(state, () => {
  emit('update:modelValue', state.form);
});

watch(() => props.modelValue, (current) => {
  if (current !== state.form) state.form = { ...current };
});
</script>

<template>
  <div class="control" :class="[rootClass, { disabled }]">
    <div class="label">{{ label }}</div>
    <div class="flex w-full">
      <slot name="attach-left" />
      <div class="relative flex-1 sm:flex-auto">
        <label
          :for="`${id}front`"
          class="prefix"
        >F</label>
        <input
          :id="`${id}front`"
          v-model="state.form.front"
          :placeholder="placeholder"
          class="rounded-r-none"
          :class="{ 'rounded-l-none': attachLeft }"
          type="number"
          :step="step"
          :min="min"
          :max="max"
          :disabled="disabled"
        >
      </div>
      <div class="relative flex-1 sm:flex-auto">
        <label
          :for="`${id}rear`"
          class="prefix"
        >R</label>
        <input
          :id="`${id}rear`"
          v-model="state.form.rear"
          :placeholder="placeholder"
          class="rounded-l-none"
          :class="{ 'rounded-r-none': attachRight }"
          type="number"
          :step="step"
          :min="min"
          :max="max"
          :disabled="disabled"
        >
      </div>
      <slot name="attach-right" />
    </div>
  </div>
</template>
