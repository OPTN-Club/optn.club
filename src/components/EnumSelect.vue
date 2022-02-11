<script setup lang="ts">import { computed } from 'vue';
import { TransmissionUpgrade } from '../lib/types';
import { enumToOptions } from '../lib/utils';
import SelectControl from './SelectControl.vue';

const props = defineProps<{
  modelValue: string;
  label: string;
  type: object;
  rootClass?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

const options = computed(() => {
  return enumToOptions(props.type);
})

function onUpdate(value: string) {
  emit('update:modelValue', value);
}
</script>
<template>
  <SelectControl
    :modelValue="modelValue"
    :label="label"
    :options="options"
    :root-class="rootClass"
    @update:modelValue="onUpdate"
  />
</template>
