<script lang="ts">
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
});

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value)
}

</script>

<template>
  <div class="control">
    <label :class="{ required }">{{ label }}</label>
    <input
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
