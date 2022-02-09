<script setup lang="ts">
import InputControl from './InputControl.vue';

const props = withDefaults(defineProps<{
  modelValue: string,
  label: string,
  errorMsg?: string,
  error?: boolean,
  required?: boolean,
  step?: number | string,
  min?: number | string,
  max?: number | string,
}>(), {
  step: 1,
  min: 0,
  max: 9999,
  errorMsg: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

function onUpdate(value: string) {
  emit('update:modelValue', value);
}
</script>

<template>
  <InputControl
    :model-value="modelValue"
    :label="label"
    :step="step"
    :min="min"
    :max="max"
    type="number"
    @update:modelValue="onUpdate"
  />
</template>
