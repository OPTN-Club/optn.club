<script setup lang="ts">
import { LimitedUpgrade } from '../lib/types';
import EnumSelect from './EnumSelect.vue';

defineProps<{
  modelValue: LimitedUpgrade;
  label: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: LimitedUpgrade): void,
}>();

function onUpdate(value: string) {
  emit('update:modelValue', value as LimitedUpgrade);
}
</script>

<template>
  <EnumSelect
    :modelValue="modelValue"
    :label="label"
    :type="LimitedUpgrade"
    rootClass="upgrade-select"
    @update:modelValue="onUpdate"
  />
</template>
