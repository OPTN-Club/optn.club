<script setup lang="ts">
import { FullUpgrade } from '../lib/types';
import EnumSelect from './EnumSelect.vue';

defineProps<{
  modelValue: FullUpgrade;
  label: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: FullUpgrade): void,
}>();

function onUpdate(value: string) {
  emit('update:modelValue', value as FullUpgrade);
}
</script>

<template>
  <EnumSelect
    :modelValue="modelValue"
    :label="label"
    :type="FullUpgrade"
    rootClass="upgrade-select"
    @update:modelValue="onUpdate"
  />
</template>
