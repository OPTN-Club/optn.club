<script lang="ts">
import { v1 as uuid } from 'uuid';

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: string,
  label: string,
  errorMsg?: string,
  error?: boolean,
  required?: boolean,
  type?: 'number' | 'text',
  step?: number | string,
  min?: number | string,
  max?: number | string,
}>(), {
  error: false,
  errorMsg: '',
  required: false,
  type: 'text',
  step: 1,
  min: 0,
  max: 9999,
});

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

const id = uuid();

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}

</script>

<template>
  <div class="control">
    <label :for="`#${id}`" :class="{ required }">{{ label }}</label>
    <input
      :id="id"
      :value="modelValue"
      :type="type"
      :required="required"
      :step="step"
      :min="min"
      :max="max"
      v-bind="$attrs"
      @input="onInput"
    />
    <span v-if="errorMsg" class="validation-message">{{ errorMsg }}</span>
  </div>
</template>
