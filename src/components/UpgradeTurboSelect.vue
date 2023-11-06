<script setup lang="ts">
import { TurboUpgrade } from '../lib/types';

import EnumSelect from './EnumSelect.vue';

defineProps<{
  modelValue: TurboUpgrade;
  label: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: TurboUpgrade): void,
}>();

function onUpdate(value: string) {
  emit('update:modelValue', value as TurboUpgrade);
}
</script>

<template>
  <EnumSelect
    :modelValue="modelValue"
    :label="label"
    :type="TurboUpgrade"
    rootClass="upgrade-select"
    @update:modelValue="onUpdate"
  />
</template>
