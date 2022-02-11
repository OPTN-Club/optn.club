<script setup lang="ts">
import { Upgrade } from '../lib/types';
import EnumSelect from './EnumSelect.vue';

const props = defineProps<{
  modelValue: Upgrade;
  label: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: Upgrade): void,
}>();

function onUpdate(value: string) {
  emit('update:modelValue', value as Upgrade);
}
</script>

<template>
  <EnumSelect
    :modelValue="modelValue"
    :label="label"
    :type="Upgrade"
    root-class="upgrade-select"
    @update:modelValue="onUpdate"
  />
</template>
