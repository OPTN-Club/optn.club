<script setup lang="ts">
import { computed } from 'vue';
import SelectControl from './SelectControl.vue';

const props = defineProps<{
  modelValue: string,
  label: string,
  type: 'pressure' | 'height' | 'force',
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

function onUpdate(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value)
}

const units = {
  pressure: [
    { label: 'psi', value: 'psi' },
    { label: 'bar', value: 'bar' },
  ],
  force: [
    { label: 'lbs/in', value: 'lbs/in' },
    { label: 'kgf', value: 'kgf' },
    { label: 'n/mm', value: 'n/mm' },
  ],
  height: [
    { label: 'in', value: 'in' },
    { label: 'cm', value: 'cm' },
  ],
}

const options = computed(() => units[props.type]);

</script>

<template>
  <SelectControl
    :modelValue="modelValue"
    :label="label"
    :options="options"
    @update:modelValue="onUpdate"
  />
</template>
