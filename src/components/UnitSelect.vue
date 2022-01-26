<template>
  <div class="control">
    <label>{{ label }}</label>
    <select :value="modelValue" @input="onInput">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">import { computed } from 'vue';

const props = defineProps<{
  modelValue: string,
  label: string,
  type: 'pressure' | 'height' | 'force',
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

function onInput(e: Event) {
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
