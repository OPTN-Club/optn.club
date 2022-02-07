<script setup lang="ts">import { reactive, watch } from 'vue';
import { FrontAndRearSettings } from '../lib/types';
import NumberInput from './NumberInput.vue';

const props = withDefaults(defineProps<{
  modelValue: FrontAndRearSettings;
  label?: string;
  required?: boolean;
  step?: number | string,
  min?: number | string,
  max?: number | string,
}>(), {
  required: false,
  step: 1,
  min: 0,
  max: 9999,
});

const emit = defineEmits<{
  (e: 'update:modelValue', v: FrontAndRearSettings): void,
}>();

const state = reactive({ form: { ...props.modelValue } });

watch(state, () => {
  emit('update:modelValue', state.form);
});

watch(() => props.modelValue, (current) => {
  if (current !== state.form) state.form = { ...current };
});

</script>
<template>
  <h3 v-if="label">{{ label }}</h3>
  <div class="row">
    <NumberInput
      v-model="state.form.front"
      label="Front"
      :required="required"
      :min="min"
      :max="max"
      :step="step"
    />
    <NumberInput
      v-model="state.form.rear"
      label="Rear"
      :required="required"
      :min="min"
      :max="max"
      :step="step"
    />
    <slot />
  </div>
</template>
