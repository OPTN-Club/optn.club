<script setup lang="ts">
import { RestrictorUpgrade } from '../lib/types';

import EnumSelect from './EnumSelect.vue';

defineProps<{
  modelValue: RestrictorUpgrade;
  label: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: RestrictorUpgrade): void,
}>();

function onUpdate(value: string) {
  emit('update:modelValue', value as RestrictorUpgrade);
}
</script>

<template>
  <EnumSelect
    :modelValue="modelValue"
    :label="label"
    :type="RestrictorUpgrade"
    @update:modelValue="onUpdate"
  />
</template>
