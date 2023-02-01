<script setup lang="ts">
import { reactive, watch } from 'vue';
import { v1 as uuid } from 'uuid';
import { AccelDecelSettings } from '../lib/types';

const props = withDefaults(defineProps<{
  modelValue: AccelDecelSettings;
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
  placeholder: '',
  required: false,
  step: 1,
  min: 0,
  max: 9999,
});

const emit = defineEmits<{
  (e: 'update:modelValue', v: AccelDecelSettings): void,
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
      <div class="relative grow sm:grow-0">
        <label
          :for="`${id}front`"
          class="prefix"
        >Accel</label>
        <input
          :id="`${id}front`"
          v-model="state.form.accel"
          :placeholder="placeholder"
          class="pl-16 sm:!w-32 rounded-r-none border-r-0 !indent-0"
          :class="{ 'rounded-l-none': attachLeft }"
          type="number"
          step="1"
          min="0"
          :disabled="disabled"
        >
      </div>
      <div class="relative grow sm:grow-0">
        <label
          :for="`${id}rear`"
          class="prefix"
        >Decel</label>
        <input
          :id="`${id}rear`"
          v-model="state.form.decel"
          :placeholder="placeholder"
          class="pl-16 sm:!w-32 rounded-l-none !indent-0"
          :class="{ 'rounded-r-none border-r-0': attachRight }"
          type="number"
          step="1"
          min="0"
          :disabled="disabled"
        >
      </div>
    </div>
  </div>
</template>
